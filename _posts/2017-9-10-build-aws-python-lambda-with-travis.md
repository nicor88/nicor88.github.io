---
layout: post
title: Build an AWS Lambda with Python using Travis-CI
---

Building an AWS Lambda function with Python can be trivial. Here my proposal to setup a Github repo
with travis, to build the lambda at each push.

[Github Repository Reference](https://github.com/nicor88/insert-to-db.python.lambda)

Structure:
*  `src`: folder containing the source code of the Lambda
*  `tests`: folder containing unit tests for the Lambda
*  `Makefile`: utils needed to build the Lambda
*  `.travis.yml`: Travis-CI configuration

## Setup the Makefile
Here how the Makefile look like
<pre>default: clean install copy zip

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
</pre>

We can build the lambda locally calling `make`
but considering that the lambda needs to be build in an Linux OS, `make` will be called inside Travis, to garantee compatibles version of C library used by the lambda.


<!---
![_config.yml]({{ site.baseurl }}/images/config.png)
-->
