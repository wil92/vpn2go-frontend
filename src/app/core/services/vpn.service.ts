import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CSVDecoder } from '../utils';
import { Cert, ListResponse } from '../models';

@Injectable()
export class VpnService {

  constructor() {
  }

  fetchListOfUsers(): Observable<ListResponse> {
    const result = 'name,begin,end,status\n' +
      'test,Jul 15 11:24:36 2020 GMT,Jul 14 11:24:36 2024 GMT,VALID\n' +
      'test2,Jul 15 11:24:55 2020 GMT,Jul 14 11:24:55 2024 GMT,VALID\n';
    const decoder = new CSVDecoder(result);
    const titles = decoder.nextLine();
    const items = decoder.decode();
    return of({titles, items} as ListResponse);
  }

  createNewCertificate(cert: Cert): Observable<string> {
    const certResponse = 'client\n' +
      'nobind\n' +
      'dev tun\n' +
      'remote-cert-tls server\n' +
      '\n' +
      'remote 192.168.178.37 1194 udp\n' +
      '\n' +
      '<key>\n' +
      '-----BEGIN PRIVATE KEY-----\n' +
      'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDsXWJGrb9+taI1\n' +
      'HTYQpEZrFxgrEQGeQ0EvCL2YgxBaBhQvg+VBAPbLxam4/QQ6jbe7ZezD61P/b6ZH\n' +
      'jdL7bsxNMhgWcpMUT33BGj5iGz0weh9Bm6lflrr6bU7ZT+8asShObKy6/5Q9LjVU\n' +
      'wuM+P4Vwi3N4dQWdlNeTRwCdwTkGFxtZ8O8M9NsVeMHxdnddpmnWBhQ5VBLor+36\n' +
      'eFCsSK0wlMRvX4fp+JVrpyIAeApKsSbf7dFKEp25ea5979K54PbDyenC88nsVsua\n' +
      'jwESJN7XJTzrlSj2xqjOEMjwOfbjHCuTxrScok70Nwd80T2xAD8iFVNjevCshQfq\n' +
      'zz1ksvjPAgMBAAECggEALDAZG1WII0wZkwxu+xV7BLJAlmyLfObd3MkpiMWX3Pyd\n' +
      '8XQa+9gOS3IclLTYgYnU+3fGl6n6/hoFYAMnmlHQZ+4hirDIxldGDz+0weqNue5a\n' +
      'wY00UOaA9ihRQVcsQDU2b9LpR9xX/kgROFNm4FBHxg6L+80Ey7zzwFjZyKRC4Nw9\n' +
      'BLHTujVQcnMHL26AdSixHrKxMcUpwP+RSZXkiTuK1CDSk3P9Iv90pr2FEK1K89WP\n' +
      'NPIaeRXHOJ15YNCQ8ElitqwUCIxacLWJNtzet4YKpbqUfL6rxfg7wTIM8MAF4iF4\n' +
      'HVU9yqHwEchFI26fs2i2v/C6LHIhTg8HQSNrZEVWIQKBgQD73KHwpiMN2Ad9ltZZ\n' +
      'xcHR6qbDo/Ugm/cCdq6xrNVuEYaJb/8yYPaycPfv6RuleBWXxPPDfGE1i0ra+rjE\n' +
      'MBA1pbMKwL1vhU/uzXG6OXQtbMCYCNvY6Amoc8ER9Zm7JbnSY4XkOYUo6HbztadL\n' +
      'kDk1C3lEaJ9fS17tDOi01wlQKwKBgQDwP5GDX7GRkfNymtyg5tmuP19RKKuDmNWf\n' +
      'hKP3cR1pFZ5YqXzn0XUQkSnPFroCWBJClDiqh5DOGIWJ6noiKVFRihj81T06SUYB\n' +
      '5tAZ34cb+4r1za4E0uVqzTGU/NzFxBV+PRiMMKNm/fPrFOWDbZPCyE7JwK5QxQSQ\n' +
      'CjmD9onD7QKBgBkoFnzE+2dclpLyyAI7gHqJJ5MPA2L4cRmr5RMWIlNWKMv9hc3w\n' +
      'ZXO5WOp7rClA71czcu2ptMP2X8mzlVTzQAs7u8BtM/65oBxIJP3m0zXeUPZenCb0\n' +
      'NlK/DR/QGkTZJdBf5HXBUQ2e+pKpKEah5zTnKnusv45zJs4ipfO6LtH1AoGBANoA\n' +
      'FL4s+yeoVEvOEh0+3I+smYU/bkK/UDirV02UqqdMIp85TEneWmdqEZIEgUzXNdqM\n' +
      'PM8grFkXDzWSOrj83PksYngp1qEpFAlts6+GkUbm/bUFqb5e0CYVg8Q5nuslfotK\n' +
      'TRgImn0+OzM5hvm3WLkKodOYr5RC8lzxqjcAYwoRAoGBAO15JVxEhkI2ssYTvJvz\n' +
      'pK2slOepg7JMZlF1fJJH93zdsolwS3IjgJQfdrgCmfx3VWdY/RXbzno2Vi5Gs3QL\n' +
      'P36CbyBT7px4PUjK2keFgcdcWxuRD/frziprsIwAyBOQNd0T2F4VvnQXc6O53A9m\n' +
      'bEgTOmpPKO+c38UBUMLNy8tA\n' +
      '-----END PRIVATE KEY-----\n' +
      '</key>\n' +
      '<cert>\n' +
      '-----BEGIN CERTIFICATE-----\n' +
      'MIIDRjCCAi6gAwIBAgIQRkU7SINQtjMX524hFhxNqTANBgkqhkiG9w0BAQsFADAQ\n' +
      'MQ4wDAYDVQQDDAVteXZwbjAeFw0yMDA3MTUxMzMwMDVaFw0yNDA3MTQxMzMwMDVa\n' +
      'MA8xDTALBgNVBAMMBGhhYWEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\n' +
      'AQDsXWJGrb9+taI1HTYQpEZrFxgrEQGeQ0EvCL2YgxBaBhQvg+VBAPbLxam4/QQ6\n' +
      'jbe7ZezD61P/b6ZHjdL7bsxNMhgWcpMUT33BGj5iGz0weh9Bm6lflrr6bU7ZT+8a\n' +
      'sShObKy6/5Q9LjVUwuM+P4Vwi3N4dQWdlNeTRwCdwTkGFxtZ8O8M9NsVeMHxdndd\n' +
      'pmnWBhQ5VBLor+36eFCsSK0wlMRvX4fp+JVrpyIAeApKsSbf7dFKEp25ea5979K5\n' +
      '4PbDyenC88nsVsuajwESJN7XJTzrlSj2xqjOEMjwOfbjHCuTxrScok70Nwd80T2x\n' +
      'AD8iFVNjevCshQfqzz1ksvjPAgMBAAGjgZwwgZkwCQYDVR0TBAIwADAdBgNVHQ4E\n' +
      'FgQUBJF9/q85bzvpp20YOcjnQWS3tYcwSwYDVR0jBEQwQoAUogcVKmF6D0GcoO6X\n' +
      'KvqODbNuFyihFKQSMBAxDjAMBgNVBAMMBW15dnBughRrxs+iX9p25+yv5dLnuZHt\n' +
      '5wxz5zATBgNVHSUEDDAKBggrBgEFBQcDAjALBgNVHQ8EBAMCB4AwDQYJKoZIhvcN\n' +
      'AQELBQADggEBAI0EltX3XUHSofiQvJft25QHmI49bKXKQjZi1XDE+q+SJYyUt24z\n' +
      'ii0ILpDtSvBHNsQ7EGye1U22foHH2W9X3ivhLi8vxzTmO9+L3QXBXJhVVtAxpZlN\n' +
      'inrAnv+Ys/IvN61JWpqFcJnqoP5BtBWWay/H1aWlb1E4oRJIKWMr4JhkA/kB2//V\n' +
      '98uJG9FIo930mWkNF2vD5hBlEydOe1ce2aoq/DFJfBv5aE5O/h1gsmSQj/E2g85B\n' +
      'KU2zcBfvS6KvVvXWtmUy822c3VEsfooa6iFSvhlZbZgJIfATyPfrCPq8Eu62VfCT\n' +
      'Y8Una4G+aqDF/9c1jpsrOukh6mcOaG6qm6M=\n' +
      '-----END CERTIFICATE-----\n' +
      '</cert>\n' +
      '<ca>\n' +
      '-----BEGIN CERTIFICATE-----\n' +
      'MIIDOTCCAiGgAwIBAgIUa8bPol/adufsr+XS57mR7ecMc+cwDQYJKoZIhvcNAQEL\n' +
      'BQAwEDEOMAwGA1UEAwwFbXl2cG4wHhcNMjAwNzE1MTEyMjI5WhcNMzAwNzEzMTEy\n' +
      'MjI5WjAQMQ4wDAYDVQQDDAVteXZwbjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC\n' +
      'AQoCggEBALYuSxVkIj5sOe2DbvLNvPQj9UvOu4Ly/hwOWWeyojXMfjoWkGBhlGb7\n' +
      's3zRBBLM0ZDlxJVwsiXWr2/LZ4MLc+//1/oUE9NxNqZU9JFZOUylr1y6ber407dO\n' +
      'yiMc+1wMV/dtXzFVYYKEBPKAopre02ZYKKgiL/KzD6lpvyX+LuxXiLXyR9F58OM2\n' +
      'sXlOjmAu6yEyBxQm4olG7V4b8JUW8O+qXviBbZK5H6znbHt+3AuE9nOUaIWzotb9\n' +
      'NbXomcB+0si/LuZcMvUJ8J6fP3btXegVTKO02gtApeLsJSpG3yeR3qUSnFAMpV/h\n' +
      '9ssrfVEuXt1nm46Z4iZPCskd1x7jQ90CAwEAAaOBijCBhzAdBgNVHQ4EFgQUogcV\n' +
      'KmF6D0GcoO6XKvqODbNuFygwSwYDVR0jBEQwQoAUogcVKmF6D0GcoO6XKvqODbNu\n' +
      'FyihFKQSMBAxDjAMBgNVBAMMBW15dnBughRrxs+iX9p25+yv5dLnuZHt5wxz5zAM\n' +
      'BgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjANBgkqhkiG9w0BAQsFAAOCAQEABFZw\n' +
      'e1iBWT1aXRjSDZk0zOAySmVOL5IqVYRx8388elkZgnOBVjRnSGrYmbLSliFngWEV\n' +
      'Ggk6chIrYhZMV5I1EGpO2tqncHiiXDj0HVCIhDaeGVU2LejwokDKH5/Mgxvn5vl4\n' +
      'Y6pvjCFWDZVaVmS9UD3xseth9ryQbhkFAQ6UVEm5FhpttWyq1Y5UP3XQhxyRVj+Q\n' +
      'MFPBw1EOKW1ZxtgbU4BtO3O2qLrYppxoTpKCXVP78V9dh8kvdDHlIot5b9dNMRF7\n' +
      'RmWdYlCnZChPUoOtR27A1Xvp45h/CTObU9XY9I7a0XPFOlwEkjR41vbfd0wFConH\n' +
      'lr/WDVPHdSWe2p8eTw==\n' +
      '-----END CERTIFICATE-----\n' +
      '</ca>\n' +
      'key-direction 1\n' +
      '<tls-auth>\n' +
      '#\n' +
      '# 2048 bit OpenVPN static key\n' +
      '#\n' +
      '-----BEGIN OpenVPN Static key V1-----\n' +
      '2478076c2ab8ec349b064653d3a5eda2\n' +
      '3c082db0e2a0c6746d01ea0b07f06055\n' +
      'ef215d0c57743d0da98d6861990dfd27\n' +
      '1e3a1c166ded180d7d3a9ec726ceb3b8\n' +
      '4aa4e723d9e070930d6054f724413b32\n' +
      '83a19f1e7dda69f52646fe4ee3fbb765\n' +
      '4fc1b8817672d43053f0898e73e41e4f\n' +
      '2df40d942b02988387f0313bed157b29\n' +
      'c37eb859e4db27af4ed797417ef7a524\n' +
      '3117776e5b61c5f86f4edd7bda789844\n' +
      '42665f2951240de41542247c172db67f\n' +
      'ee83a79b6995a9722851e75fec4975b8\n' +
      '2bb3c46b55193b208ada091e6754cce8\n' +
      'adedad515e5d770aefb69ed323e76ea1\n' +
      'ddab2f5d76d63855c187d2a05f13249f\n' +
      '5434ae86951f014e5138da2844ceea1a\n' +
      '-----END OpenVPN Static key V1-----\n' +
      '</tls-auth>\n' +
      '\n' +
      'redirect-gateway def1\n' +
      'comp-lzo';

    return of(certResponse);
  }
}
