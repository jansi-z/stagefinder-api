# Stagefinder API

This is an API for StageFinder, an app that helps musicians find places to play. It uses [Feathers](http://feathersjs.com), [MongoDB](https://www.mongodb.com/) and [ElasticSearch](https://www.elastic.co).

The client for this project can be found here: [StageFinder React Client](https://github.com/megancallenbach/stage-finder)

## Getting Started

Getting up and running is pretty straightforward.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Make sure MongoDB is installed and running. Check in your terminal:

    ```
    $ ps aux | grep mongod
    ```

    If it isn't, run:

    ```
    $ sudo mongod --dbpath /var/lib/mongodb
    ```

3. Make sure ElasticSearch is installed and running. Check by sending a curl request:

    ```
    $ curl localhost:9200
    ```

    The response should look like this:

    ```
    {
      "name" : "kkrz6Il",
      "cluster_name" : "elasticsearch",
      "cluster_uuid" : "vCakhqjfS3GeJH88xXa-KQ",
      "version" : {
        "number" : "5.6.3",
        "build_hash" : "1a2f265",
        "build_date" : "2017-10-06T20:33:39.012Z",
        "build_snapshot" : false,
        "lucene_version" : "6.6.1"
      },
      "tagline" : "You Know, for Search"
    }
    ```

4. Install your dependencies

    ```
    cd path/to/stagefinder-api; npm install
    ```

5. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
