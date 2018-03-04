FROM ruby:2.5.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs postgresql
RUN mkdir /service
WORKDIR /service
ADD Gemfile /service/Gemfile
ADD Gemfile.lock /service/Gemfile.lock
RUN bundle install
ADD . /service
