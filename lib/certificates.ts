export const vrfHexKey = '2d7688feb429f714f102f758412cd4b81337b307122770f620ad9e4ac898a2eb';

export const LECert =
    '-----BEGIN CERTIFICATE-----\nMIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/\nMSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT\nDkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow\nSjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT\nGkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC\nAQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF\nq6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8\nSMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0\nZ8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA\na6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj\n/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T\nAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG\nCCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv\nbTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k\nc3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw\nVAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC\nARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz\nMDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu\nY3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\nAAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo\nuM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/\nwApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu\nX4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG\nPfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6\nKOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\n-----END CERTIFICATE-----';

export const ctLogs = [
    {
        description: "Google 'Argon2020' log",
        log_id: 'sh4FzIuizYogTodm+Su5iiUgZ2va+nDnsklTLe+LkF4=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE6Tx2p1yKY4015NyIYvdrk36es0uAc1zA4PQ+TGRY+3ZjUTIYY9Wyu+3q/147JG4vNVKLtDWarZwVqGkg6lAYzA==',
        url: 'https://ct.googleapis.com/logs/argon2020/',
        state: {
            usable: {
                timestamp: '2018-06-15T02:30:13Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Argon2021' log",
        log_id: '9lyUL9F3MCIUVBgIMJRWjuNNExkzv98MLyALzE7xZOM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAETeBmZOrzZKo4xYktx9gI2chEce3cw/tbr5xkoQlmhB18aKfsxD+MnILgGNl0FOm0eYGilFVi85wLRIOhK8lxKw==',
        url: 'https://ct.googleapis.com/logs/argon2021/',
        state: {
            usable: {
                timestamp: '2018-06-15T02:30:13Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Argon2022' log",
        log_id: 'KXm+8J45OSHwVnOfY6V35b5XfZxgCvj5TV0mXCVdx4Q=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeIPc6fGmuBg6AJkv/z7NFckmHvf/OqmjchZJ6wm2qN200keRDg352dWpi7CHnSV51BpQYAj1CQY5JuRAwrrDwg==',
        url: 'https://ct.googleapis.com/logs/argon2022/',
        state: {
            usable: {
                timestamp: '2019-12-17T18:38:01Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Argon2023' log",
        log_id: '6D7Q2j71BjUy51covIlryQPTy9ERa+zraeF3fW0GvW4=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE0JCPZFJOQqyEti5M8j13ALN3CAVHqkVM4yyOcKWCu2yye5yYeqDpEXYoALIgtM3TmHtNlifmt+4iatGwLpF3eA==',
        url: 'https://ct.googleapis.com/logs/argon2023/',
        state: {
            usable: {
                timestamp: '2019-12-17T18:38:01Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Xenon2020' log",
        log_id: 'B7dcG+V9aP/xsMYdIxXHuuZXfFeUt2ruvGE6GmnTohw=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEZU75VqjyzSTgFZKAnWg1QeYfFFIRZTMK7q3kWWZsmHhQdrBYnHRZ3OA4kUeUx0JN+xX+dSgt1ruqUhhl7jOvmw==',
        url: 'https://ct.googleapis.com/logs/xenon2020/',
        state: {
            usable: {
                timestamp: '2019-06-17T21:23:01Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Xenon2021' log",
        log_id: 'fT7y+I//iFVoJMLAyp5SiXkrxQ54CX8uapdomX4i8Nc=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAER+1MInu8Q39BwDZ5Rp9TwXhwm3ktvgJzpk/r7dDgGk7ZacMm3ljfcoIvP1E72T8jvyLT1bvdapylajZcTH6W5g==',
        url: 'https://ct.googleapis.com/logs/xenon2021/',
        state: {
            usable: {
                timestamp: '2019-06-17T21:23:01Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Xenon2022' log",
        log_id: 'RqVV63X6kSAwtaKJafTzfREsQXS+/Um4havy/HD+bUc=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+WS9FSxAYlCVEzg8xyGwOrmPonoV14nWjjETAIdZvLvukPzIWBMKv6tDNlQjpIHNrUcUt1igRPpqoKDXw2MeKw==',
        url: 'https://ct.googleapis.com/logs/xenon2022/',
        state: {
            usable: {
                timestamp: '2019-06-17T21:23:01Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Xenon2023' log",
        log_id: 'rfe++nz/EMiLnT2cHj4YarRnKV3PsQwkyoWGNOvcgoo=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEchY+C+/vzj5g3ZXLY3q5qY1Kb2zcYYCmRV4vg6yU84WI0KV00HuO/8XuQqLwLZPjwtCymeLhQunSxgAnaXSuzg==',
        url: 'https://ct.googleapis.com/logs/xenon2023/',
        state: {
            usable: {
                timestamp: '2019-12-17T18:38:01Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Aviator' log",
        log_id: 'aPaY+B9kgr46jO65KB1M/HFRXWeT1ETRCmesu09P+8Q=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1/TMabLkDpCjiupacAlP7xNi0I1JYP8bQFAHDG1xhtolSY1l4QgNRzRrvSe8liE+NPWHdjGxfx3JhTsN9x8/6Q==',
        url: 'https://ct.googleapis.com/aviator/',
        state: {
            readonly: {
                timestamp: '2016-11-30T13:24:18Z',
                final_tree_head: {
                    sha256_root_hash: 'LcGcZRsm+LGYmrlyC5LXhV1T6OD8iH5dNlb0sEJl9bA=',
                    tree_size: 46466472,
                },
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Icarus' log",
        log_id: 'KTxRllTIOWW6qlD8WAfUt2+/WHopctykwwz05UVH9Hg=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAETtK8v7MICve56qTHHDhhBOuV4IlUaESxZryCfk9QbG9co/CqPvTsgPDbCpp6oFtyAHwlDhnvr7JijXRD9Cb2FA==',
        url: 'https://ct.googleapis.com/icarus/',
        state: {
            usable: {
                timestamp: '2017-03-06T19:35:01Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Pilot' log",
        log_id: 'pLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BA=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfahLEimAoz2t01p3uMziiLOl/fHTDM0YDOhBRuiBARsV4UvxG2LdNgoIGLrtCzWE0J5APC2em4JlvR8EEEFMoA==',
        url: 'https://ct.googleapis.com/pilot/',
        state: {
            usable: {
                timestamp: '2014-09-02T20:41:44Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Rocketeer' log",
        log_id: '7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/cs=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEIFsYyDzBi7MxCAC/oJBXK7dHjG+1aLCOkHjpoHPqTyghLpzA9BYbqvnV16mAw04vUjyYASVGJCUoI3ctBcJAeg==',
        url: 'https://ct.googleapis.com/rocketeer/',
        state: {
            usable: {
                timestamp: '2015-08-04T19:00:05Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Google 'Skydiver' log",
        log_id: 'u9nfvB+KcbWTlCOXqpJ7RzhXlQqrUugakJZkNo4e0YU=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEmyGDvYXsRJsNyXSrYc9DjHsIa2xzb4UR7ZxVoV6mrc9iZB7xjI6+NrOiwH+P/xxkRmOFG6Jel20q37hTh58rA==',
        url: 'https://ct.googleapis.com/skydiver/',
        state: {
            usable: {
                timestamp: '2017-03-06T19:35:01Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Cloudflare 'Nimbus2020' Log",
        log_id: 'Xqdz+d9WwOe1Nkh90EngMnqRmgyEoRIShBh1loFxRVg=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE01EAhx4o0zPQrXTcYjgCt4MVFsT0Pwjzb1RwrM0lhWDlxAYPP6/gyMCXNkOn/7KFsjL7rwk78tHMpY8rXn8AYg==',
        url: 'https://ct.cloudflare.com/logs/nimbus2020/',
        state: {
            usable: {
                timestamp: '2018-06-15T02:30:13Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Cloudflare 'Nimbus2021' Log",
        log_id: 'RJRlLrDuzq/EQAfYqP4owNrmgr7YyzG1P9MzlrW2gag=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAExpon7ipsqehIeU1bmpog9TFo4Pk8+9oN8OYHl1Q2JGVXnkVFnuuvPgSo2Ep+6vLffNLcmEbxOucz03sFiematg==',
        url: 'https://ct.cloudflare.com/logs/nimbus2021/',
        state: {
            usable: {
                timestamp: '2018-06-15T02:30:13Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Cloudflare 'Nimbus2022' Log",
        log_id: 'QcjKsd8iRkoQxqE6CUKHXk4xixsD6+tLx2jwkGKWBvY=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAESLJHTlAycmJKDQxIv60pZG8g33lSYxYpCi5gteI6HLevWbFVCdtZx+m9b+0LrwWWl/87mkNN6xE0M4rnrIPA/w==',
        url: 'https://ct.cloudflare.com/logs/nimbus2022/',
        state: {
            usable: {
                timestamp: '2019-10-31T19:22:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Cloudflare 'Nimbus2023' Log",
        log_id: 'ejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61I=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEi/8tkhjLRp0SXrlZdTzNkTd6HqmcmXiDJz3fAdWLgOhjmv4mohvRhwXul9bgW0ODgRwC9UGAgH/vpGHPvIS1qA==',
        url: 'https://ct.cloudflare.com/logs/nimbus2023/',
        state: {
            usable: {
                timestamp: '2019-10-31T19:22:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Log Server',
        log_id: 'VhQGmi/XwuzT9eG9RLI+x0Z2ubyZEVzA75SYVdaJ0N0=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAkbFvhu7gkAW6MHSrBlpE1n4+HCFRkC5OLAjgqhkTH+/uzSfSl8ois8ZxAD2NgaTZe1M9akhYlrYkes4JECs6A==',
        url: 'https://ct1.digicert-ct.com/log/',
        state: {
            usable: {
                timestamp: '2015-05-20T16:40:09Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Log Server 2',
        log_id: 'h3W/51l8+IxDmV+9827/Vo1HVjb/SrVgwbTq/16ggw8=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEzF05L2a4TH/BLgOhNKPoioYCrkoRxvcmajeb8Dj4XQmNY+gxa4Zmz3mzJTwe33i0qMVp+rfwgnliQ/bM/oFmhA==',
        url: 'https://ct2.digicert-ct.com/log/',
        state: {
            retired: {
                timestamp: '2020-05-04T00:00:40Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Yeti2020 Log',
        log_id: '8JWkWfIA0YJAEC0vk4iOrUv+HUfjmeHQNKawqKqOsnM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEURAG+Zo0ac3n37ifZKUhBFEV6jfcCzGIRz3tsq8Ca9BP/5XUHy6ZiqsPaAEbVM0uI3Tm9U24RVBHR9JxDElPmg==',
        url: 'https://yeti2020.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2018-08-24T00:53:07Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Yeti2021 Log',
        log_id: 'XNxDkv7mq0VEsV6a1FbmEDf71fpH3KFzlLJe5vbHDso=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE6J4EbcpIAl1+AkSRsbhoY5oRTj3VoFfaf1DlQkfi7Rbe/HcjfVtrwN8jaC+tQDGjF+dqvKhWJAQ6Q6ev6q9Mew==',
        url: 'https://yeti2021.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2018-08-24T00:53:07Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Yeti2022 Log',
        log_id: 'IkVFB1lVJFaWP6Ev8fdthuAjJmOtwEt/XcaDXG7iDwI=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEn/jYHd77W1G1+131td5mEbCdX/1v/KiYW5hPLcOROvv+xA8Nw2BDjB7y+RGyutD2vKXStp/5XIeiffzUfdYTJg==',
        url: 'https://yeti2022.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2018-08-24T00:53:07Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Yeti2023 Log',
        log_id: 'Nc8ZG7+xbFe/D61MbULLu7YnICZR6j/hKu+oA8M71kw=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfQ0DsdWYitzwFTvG3F4Nbj8Nv5XIVYzQpkyWsU4nuSYlmcwrAp6m092fsdXEw6w1BAeHlzaqrSgNfyvZaJ9y0Q==',
        url: 'https://yeti2023.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2019-10-31T19:22:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Nessie2020 Log',
        log_id: 'xlKg7EjOs/yrFwmSxDqHQTMJ6ABlomJSQBujNioXxWU=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE4hHIyMVIrR9oShgbQMYEk8WX1lmkfFKB448Gn93KbsZnnwljDHY6MQqEnWfKGgMOq0gh3QK48c5ZB3UKSIFZ4g==',
        url: 'https://nessie2020.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2019-05-09T22:11:02Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Nessie2021 Log',
        log_id: '7sCV7o1yZA+S48O5G8cSo2lqCXtLahoUOOZHssvtxfk=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9o7AiwrbGBIX6Lnc47I6OfLMdZnRzKoP5u072nBi6vpIOEooktTi1gNwlRPzGC2ySGfuc1xLDeaA/wSFGgpYFg==',
        url: 'https://nessie2021.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2019-05-09T22:11:02Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Nessie2022 Log',
        log_id: 'UaOw9f0BeZxWbbg3eI8MpHrMGyfL956IQpoN/tSLBeU=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEJyTdaAMoy/5jvg4RR019F2ihEV1McclBKMe2okuX7MCv/C87v+nxsfz1Af+p+0lADGMkmNd5LqZVqxbGvlHYcQ==',
        url: 'https://nessie2022.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2019-05-09T22:11:02Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'DigiCert Nessie2023 Log',
        log_id: 's3N3B+GEUPhjhtYFqdwRCUp5LbFnDAuH3PADDnk2pZo=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEXu8iQwSCRSf2CbITGpUpBtFVt8+I0IU0d1C36Lfe1+fbwdaI0Z5FktfM2fBoI1bXBd18k2ggKGYGgdZBgLKTg==',
        url: 'https://nessie2023.ct.digicert.com/log/',
        state: {
            usable: {
                timestamp: '2019-10-31T19:22:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Symantec log',
        log_id: '3esdK3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvsw=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEluqsHEYMG1XcDfy1lCdGV0JwOmkY4r87xNuroPS2bMBTP01CEDPwWJePa75y9CrsHEKqAy8afig1dpkIPSEUhg==',
        url: 'https://ct.ws.symantec.com/',
        state: {
            retired: {
                timestamp: '2019-02-16T00:00:00Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Symantec 'Vega' log",
        log_id: 'vHjh38X2PGhGSTNNoQ+hXwl5aSAJwIG08/aRfz7ZuKU=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE6pWeAv/u8TNtS4e8zf0ZF2L/lNPQWQc/Ai0ckP7IRzA78d0NuBEMXR2G3avTK0Zm+25ltzv9WWis36b4ztIYTQ==',
        url: 'https://vega.ws.symantec.com/',
        state: {
            retired: {
                timestamp: '2019-02-16T00:00:00Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Symantec 'Sirius' log",
        log_id: 'FZcEiNe5l6Bb61JRKt7o0ui0oxZSZBIan6v71fha2T8=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEowJkhCK7JewN47zCyYl93UXQ7uYVhY/Z5xcbE4Dq7bKFN61qxdglnfr0tPNuFiglN+qjN2Syxwv9UeXBBfQOtQ==',
        url: 'https://sirius.ws.symantec.com/',
        state: {
            retired: {
                timestamp: '2019-02-16T00:00:00Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Certly.IO log',
        log_id: 'zbUXm3/BwEb+6jETaj+PAC5hgvr4iW/syLL1tatgSQA=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAECyPLhWKYYUgEc+tUXfPQB4wtGS2MNvXrjwFCCnyYJifBtd2Sk7Cu+Js9DNhMTh35FftHaHu6ZrclnNBKwmbbSA==',
        url: 'https://log.certly.io/',
        state: {
            retired: {
                timestamp: '2016-04-15T00:00:00Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Izenpe log',
        log_id: 'dGG0oJz7PUHXUVlXWy52SaRFqNJ3CbDMVkpkgrfrQaM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEJ2Q5DC3cUBj4IQCiDu0s6j51up+TZAkAEcQRF6tczw90rLWXkJMAW7jr9yc92bIKgV8vDXU4lDeZHvYHduDuvg==',
        url: 'https://ct.izenpe.com/',
        state: {
            retired: {
                timestamp: '2016-05-30T00:00:00Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'WoSign log',
        log_id: 'QbLcLonmPOSvG6e7Kb9oxt7m+fHMBH4w3/rjs7olkmM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEzBGIey1my66PTTBmJxklIpMhRrQvAdPG+SvVyLpzmwai8IoCnNBrRhgwhbrpJIsO0VtwKAx+8TpFf1rzgkJgMQ==',
        url: 'https://ctlog.wosign.com/',
        state: {
            retired: {
                timestamp: '2018-02-12T23:59:59Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Venafi log',
        log_id: 'rDua7X+pZ0dXFZ5tfVdWcvnZgQCUHpve/+yhMTt1eC0=',
        key:
            'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAolpIHxdSlTXLo1s6H1OCdpSj/4DyHDc8wLG9wVmLqy1lk9fz4ATVmm+/1iN2Nk8jmctUKK2MFUtlWXZBSpym97M7frGlSaQXUWyA3CqQUEuIJOmlEjKTBEiQAvpfDjCHjlV2Be4qTM6jamkJbiWtgnYPhJL6ONaGTiSPm7Byy57iaz/hbckldSOIoRhYBiMzeNoA0DiRZ9KmfSeXZ1rB8y8X5urSW+iBzf2SaOfzBvDpcoTuAaWx2DPazoOl28fP1hZ+kHUYvxbcMjttjauCFx+JII0dmuZNIwjfeG/GBb9frpSX219k1O4Wi6OEbHEr8at/XQ0y7gTikOxBn/s5wQIDAQAB',
        url: 'https://ctlog.api.venafi.com/',
        state: {
            retired: {
                timestamp: '2017-02-28T18:42:26Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'CNNIC CT log',
        log_id: 'pXesnO11SN2PAltnokEInfhuD0duwgPC7L7bGF8oJjg=',
        key:
            'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv7UIYZopMgTTJWPp2IXhhuAf1l6a9zM7gBvntj5fLaFm9pVKhKYhVnno94XuXeN8EsDgiSIJIj66FpUGvai5samyetZhLocRuXhAiXXbDNyQ4KR51tVebtEq2zT0mT9liTtGwiksFQccyUsaVPhsHq9gJ2IKZdWauVA2Fm5x9h8B9xKn/L/2IaMpkIYtd967TNTP/dLPgixN1PLCLaypvurDGSVDsuWabA3FHKWL9z8wr7kBkbdpEhLlg2H+NAC+9nGKx+tQkuhZ/hWR65aX+CNUPy2OB9/u2rNPyDydb988LENXoUcMkQT0dU3aiYGkFAY0uZjD2vH97TM20xYtNQIDAQAB',
        url: 'https://ctserver.cnnic.cn/',
        state: {
            retired: {
                timestamp: '2018-09-18T00:00:00Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'StartCom log',
        log_id: 'NLtq1sPfnAPuqKSZ/3iRSGydXlysktAfe/0bzhnbSO8=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAESPNZ8/YFGNPbsu1Gfs/IEbVXsajWTOaft0oaFIZDqUiwy1o/PErK38SCFFWa+PeOQFXc9NKv6nV0+05/YIYuUQ==',
        url: 'https://ct.startssl.com/',
        state: {
            retired: {
                timestamp: '2018-02-12T23:59:59Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Sectigo 'Sabre' CT log",
        log_id: 'VYHUwhaQNgFK6gubVzxT8MDkOHhwJQgXL6OqHQcT0ww=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE8m/SiQ8/xfiHHqtls9m7FyOMBg4JVZY9CgiixXGz0akvKD6DEL8S0ERmFe9U4ZiA0M4kbT5nmuk3I85Sk4bagA==',
        url: 'https://sabre.ct.comodo.com/',
        state: {
            usable: {
                timestamp: '2017-10-10T00:38:10Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Sectigo 'Mammoth' CT log",
        log_id: 'b1N2rDHwMRnYmQCkURX/dxUcEdkCwQApBo2yCJo32RM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7+R9dC4VFbbpuyOL+yy14ceAmEf7QGlo/EmtYU6DRzwat43f/3swtLr/L8ugFOOt1YU/RFmMjGCL17ixv66MZw==',
        url: 'https://mammoth.ct.comodo.com/',
        state: {
            usable: {
                timestamp: '2017-10-10T00:38:10Z',
            },
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Let's Encrypt 'Oak2020' log",
        log_id: '5xLysDd+GmL7jskMYYTx6ns3y1YdESZb8+DzS/JBVG4=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfzb42Zdr/h7hgqgDCo1vrNJqGqbcUvJGJEER9DDqp19W/wFSB0l166hD+U5cAXchpH8ZkBNUuvOHS0OnJ4oJrQ==',
        url: 'https://oak.ct.letsencrypt.org/2020/',
        state: {
            usable: {
                timestamp: '2020-01-27T18:18:26Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-07T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Let's Encrypt 'Oak2021' log",
        log_id: 'lCC8Ho7VjWyIcx+CiyIsDdHaTV5sT5Q9YdtOL1hNosI=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELsYzGMNwo8rBIlaklBIdmD2Ofn6HkfrjK0Ukz1uOIUC6Lm0jTITCXhoIdjs7JkyXnwuwYiJYiH7sE1YeKu8k9w==',
        url: 'https://oak.ct.letsencrypt.org/2021/',
        state: {
            usable: {
                timestamp: '2020-01-27T18:18:26Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-07T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Let's Encrypt 'Oak2022' log",
        log_id: '36Veq2iCTx9sre64X04+WurNohKkal6OOxLAIERcKnM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhjyxDVIjWt5u9sB/o2S8rcGJ2pdZTGA8+IpXhI/tvKBjElGE5r3de4yAfeOPhqTqqc+o7vPgXnDgu/a9/B+RLg==',
        url: 'https://oak.ct.letsencrypt.org/2022/',
        state: {
            usable: {
                timestamp: '2020-01-27T18:18:26Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-07T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: "Let's Encrypt 'Oak2023' log",
        log_id: 'tz77JN+cTbp18jnFulj0bF38Qs96nzXEnh0JgSXttJk=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEsz0OeL7jrVxEXJu+o4QWQYLKyokXHiPOOKVUL3/TNFFquVzDSer7kZ3gijxzBp98ZTgRgMSaWgCmZ8OD74mFUQ==',
        url: 'https://oak.ct.letsencrypt.org/2023/',
        state: {
            qualified: {
                timestamp: '2020-08-18T00:00:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-07T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Trust Asia Log2020',
        log_id: 'pZWUO1NwvukG4AUNH7W7xqQOZfJlroUsdjY/rbIzNu0=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEbsWC7ukn2WYOMxTAcqL8gMRZEQTZF9+Ho1MB9WLhHIaCHpHsJSx0DjJdVILW9mtM5xZtWywMWMQ9/R3OBgQEXQ==',
        url: 'https://ct.trustasia.com/log2020/',
        state: {
            qualified: {
                timestamp: '2020-08-18T00:00:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2020-01-01T00:00:00Z',
            end_exclusive: '2021-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Trust Asia Log2021',
        log_id: 'Z422Wz50Q7bzo3DV4TqxtDvgoNNR98p0IlDHxvpRqIo=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEjwlzYzssDEG4DpPoOS73Ewsdohc0MzaohzRmUz9dih7Z8SHyyviKmnQL1KKfY6VGFnt0ulbVupzGXSaYUAoupA==',
        url: 'https://ct.trustasia.com/log2021/',
        state: {
            qualified: {
                timestamp: '2020-08-18T00:00:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2021-01-01T00:00:00Z',
            end_exclusive: '2022-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Trust Asia Log2022',
        log_id: 'w2X5s2VPMoPHnamOk9dBj1ure+MlLJjh0vBLuetCfSM=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEu1LyFs+SC8555lRtwjdTpPX5OqmzBewdvRbsMKwu+HliNRWOGtgWLuRIa/bGE/GWLlwQ/hkeqBi4Dy3DpIZRlw==',
        url: 'https://ct.trustasia.com/log2022/',
        state: {
            qualified: {
                timestamp: '2020-08-18T00:00:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2022-01-01T00:00:00Z',
            end_exclusive: '2023-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
    {
        description: 'Trust Asia Log2023',
        log_id: '6H6nZgvCbPYALvVyXT/g4zG5OTu5L79Y6zuQSdr1Q1o=',
        key:
            'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEpBFS2xdBTpDUVlESMFL4mwPPTJ/4Lji18Vq6+ji50o8agdqVzDPsIShmxlY+YDYhINnUrF36XBmhBX3+ICP89Q==',
        url: 'https://ct.trustasia.com/log2023/',
        state: {
            qualified: {
                timestamp: '2020-08-18T00:00:00Z',
            },
        },
        temporal_interval: {
            start_inclusive: '2023-01-01T00:00:00Z',
            end_exclusive: '2024-01-01T00:00:00Z',
        },
        maximum_merge_delay: 86400,
    },
];
