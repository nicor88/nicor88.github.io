---
layout: post
title: Build an AWS Lambda with Python using Travis-CI
---

Building an AWS Lambda function with Python can be trivial. Here my proposal to setup a Github repo
with travis, to build the lambda at each push.

[Github Repository Reference](https://github.com/nicor88/insert-to-db.python.lambda)

Structure:

* **_src_**: folder containing the source code of the Lambda
* **_tests_**: folder containing unit tests for the Lambda
* **_Makefile_**: utils needed to build the Lambda
* **requirements.txt**: it contains the libs to install (PIP format)
* **_.travis.yml_**: Travis-CI configuration

## Setup the Makefile
Here how the Makefile look like

```bash
default: clean install copy zip

install: build_path
  pip install -r requirements.txt -t build

build_path:
  mkdir build

build_dist:
  mkdir dist

copy:
  cp -R src/* build/

zip: build_dist
  cd build && zip -r ../dist/lambda.zip .

clean:
  rm -rf build
  rm -rf dist
```

We can build the lambda locally calling **make**.
Considering that the lambda needs to be build in an Linux OS, calling **make** from Travis-CI (that runs inside a Linux Docker container) will ensure that we will put the right python packages to be use in the lambda function.
The ouput of the Makefile is **_dist/lambda.zip_**

Here how you can setup the **.travis.yml**:

```bash
language: python

python: '3.6'
sudo: false

env:
  global:
    - AWS_DEFAULT_REGION=eu-west-1
    - PYTHONPATH=$TRAVIS_BUILD_DIR:$PYTHONPATH

install:
  - pip install pytest
  - pip install -r requirements.txt

script:
  # run tests
  - py.test -vv -r sxX

before_deploy:
  - make
  - mv dist/lambda.zip dist/latest.zip
  - cp dist/latest.zip dist/$TRAVIS_COMMIT.zip

deploy:
  provider:          s3
  access_key_id:     $AWS_ACCESS_KEY_ID
  secret_access_key: $AWS_SECRET_ACCESS_KEY
  bucket:            $AWS_BUCKET
  region:            $AWS_BUCKET_REGION
  local_dir:         dist
  upload-dir:        deployments/lambdas/your_lambda
  acl:               private
  skip_cleanup:      true
  on:
    all_branches: true

notifications:
  email: true
```

Here what the config above does:

* Install pytest
* Install libs in **_requirements.txt_**
* Build Lambda using **_make_**
* Copy the builded lambda to **_dist/latest.zip_**
* Copy the builded lambda to **_dist/$TRAVIS_COMMIT.zip_**
* Upload **_dist/_** to S3 **_deployments/lambdas/your_lambda_**

<!---
![_config.yml]({{ site.baseurl }}/images/config.png)
-->
