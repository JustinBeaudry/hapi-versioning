Rendition
=========

Opinionated versioning for Hapijs. Version by `Accepts` request header and `content-type` response header.

## Usage 
```
server.route({
  method: 'GET',
  path: '/foo',
  handler: handler,
  config: {
    plugins: {
      rendition: {
        versions: {
          '2.x.x': handler2
        },
        contentTypes: [
          'json',
          'xml'
        ],
        default: true
      }
    }
  }
});
```

## When to use URL's vs Headers

TLDR; RPC web API's can use URL based versioning, REST API's benefit the most from header based versioning. It's all opinion and you should do what you think is best for your project.

* Why not to use `X` prefixed headers
  * http://tools.ietf.org/html/rfc6648
  * http://tools.ietf.org/html/draft-saintandre-xdash-00

## Roadmap
* `1.0.0` - Versioning by Headers; Resource Representation
* `1.2.0` - Versioning by URL
* `1.2.5` - Unit Tests
* `1.2.8` - Travis build 

## TODO
* cache handlers for quick referencing
* passing on representation preferences to handlers.

## Notes
* Hapi version `7.5.3` - http://hapijs.com/api/7.5.3#plugin-interface
Urls on Versioning API's:
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html
* https://www.mnot.net/blog/2011/10/25/web_api_versioning_smackdown
* https://www.mnot.net/blog/2012/12/04/api-evolution
* https://tools.ietf.org/html/draft-nottingham-json-home-03
* http://tools.ietf.org/html/draft-ietf-httpbis-p3-payload-16#section-5.2
* http://tools.ietf.org/html/draft-ietf-httpbis-p6-cache-16#section-3.2.3
* Options requests
  * http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html