FROM ruby:3.1.2
RUN apt-get update && apt-get install git nodejs libpq-dev -y
WORKDIR /usr/src/app
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .