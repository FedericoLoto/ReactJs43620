const Loader = ()=>{
    return(
        <img className="loader" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADR0dGZmZnCwsKzs7NcXFweHh6Kioqjo6N6enpra2s9PT1MTEwuLi4PDw/d3d1zc3PIyMhSUlL29vagoKDy8vK1tbWEhITm5uZiYmLg4OCTk5Pr6+uNjY1EREQ5OTkYGBgoKCirq6scHBwwMDASEhK9UeYhAAAMR0lEQVR4nO2d62KiMBCFARGvVIRwEaVeqL7/Iy5obclkckEI0a7n566L+fZMJskwoGUNqXF+tI/5eNDvHFLOyb7p5Jgeih6F9q9C04PRocJuqjA9HA3KKcLc9HD6V2LTSkwPqHe5gNA1PaDeVQJC8ZKROM7LmQwJS9Fnl/Un9qKPPKHUCTe+ba8q2bb/UhlXmTA5XfmujKdXClVlwugHsEKMhhxiR6kSOg3ACvGF9neqhAuacD3oIDtJkXBDAa5Wk2FH2UWKhCNAaA87yi5SJDz/dUIXAvoDD7OD1Ag9SPhC+xolQphnVq90BFEi/IQWvtBioUZ4gRa+0IKvRJi+cJ5RI4xeOM8oEQYwz6xeKM8oEWbQwvnww+wgOSGBDtqBgXE+Ljkhk2eWBobZQXLCAyR8sfsbUkImzxwHHB1JkoR0vIaUcA4tnAqvtwlTZ9NxTHeRwKkVdEvdMsKkVZ5xo/oal7yXPc/GuWvb5TIywhJa6AkutrYvk0pfF3vXZUw3/QJWNna4joxwDwkFZf+FPbmrOyJxnH4QJYROizzTAKwQuwZq4PSEKCFcQwv53uRNwMml43062sIuiGLChDn6cgv6NGA1F7uV/hNI+DCimDCGFnKdWdCAncOUJXwUUUw4gYS8G/0M4MROHxvQtxDCBxGFhCEEPHCukjOAk45dD8w8fBhxDAipTSdTYovxiyCAk1XHnU3QF6LoLjdbYsOzBxuiVS7tensKC9OHEEWdCkwpf4FeAgOcdG8I2PaFKOg2YfYzaHrEQnTSR70RjdMHEPkdQ3AxtE/Yv8cd7KUvpy/E5kykQoshxEpsOCAezq3VF6LzA0hHITw42chZFA/R3jqr+kK0yv1xdWS7SOg6KVZi0wzYI2JlGPJnM5qQva7WEL2pR0RE5NRARAY+AKBuxMbp0D4yLmsP0Zv0Ioa3NqiVbZ+Z7YzGZYKWXsRivqqT7HnE/M0gIXqTXsRqf5imW3adGMzBWpoRUQ00B+8aHnHAEL0JR+xURxUqGxqQh9i14s+TM2yI3tTbiVhF3mV4QA6ipu9CLNQbojdhiHrCNEDKTgMAooh6CNlpONSDKCyinu8pmOLvYE/aMIiavufyZSBEbwKIfd2LhdrZfQMmQei6SuMNhrDQIpNjuxAlY+80OWTcATnutxRuaDcR9XUuOfaxhYNBNvk6fXx8nOwFOiQSur8KpUZuBwCszo0T+zoXL3Ym+WRl36XGu2qyx4rmjksrkCwB3w0Muubg/Vt2x/rc6ElmwmZ6/vrhq21EugA2LiOpkUTXhpRSId0VupE9+aB1YduNQpawYpQZ+QTajg6X0wfUib1hgwHWcp77+bFwMYH23bSC3hAeocKMNKZkdPhi7fsmhKEtInxSI531CrcPJ+RG6X1GIkUikypKH5l9oijFMw1t5PP0JAfzD254cjMNslqwRmpe/NRExnuxfbUuSIcGXPFxdexQ7K5gOjlK+T4mWN8fkcfpLVgHh2ooWR8F2eUXcImnRjUX3dBczinOKnynVc4bYqLGaO7FJHt5fJ6+TmtRmJGtSqzqKwGLNTtK+S5+LE2HhdxIQyYSmYWT1UJtaGQrQzQzE7croX3H86jF1ktipJlNnCsI0skkb9scRYKnI0x5hJV9nw/lhoKbdcws+w4epSfbTx+eNjwj+xx3i9GcEbyvc9bxxtAGMdLUM2VTuN6fjlHZQzwljJGmNjXFB7VcfF3mvW0h6X2Auc23Y59+7TvMeh3I74YuNHm6cJbXg8Vpclr0fwK4buhC3fVR6SjK/Hz68ORbs0evr+m6rUQS02fUt95666233nrrLVMqtoFE26e6wUbCdCxR2uhFI6Hs0zcZLHbTKrLqgHGWqDqCZN8b2EKNr9Zz+Ogczkslnc/XI1YLwOdADM4HNcDl8nCuCy7SgG6q23PT/WivDFghRpa1KdsQjk3dsvhV+qEOuFyeXEsxy9xl/jXcixYWVibO2wXpM4Tpvg3gculb7QDNE5J2gMvlf+Dh35+Hfz+X/v310EraEL7knubv70v/g7PF9d/87fPhW2+99dZbb7311n8lMszDahKRzm9t5l3YGc9ms9Twe9JJuo72/qLsf5e8SWdxXBHGsYaLqyvwlnu/0t7nP+z7iIhTXvFuGplri3IO/l37pTfuK1oLt4F3lbHeRJ/SfvnZw5whwRjyzWJTD1yM9j5kXDzeHnxVEs4YPnMmkshntfR3j9f/tuMRhlfNRDPJJjgghJWRh8VDPb08+65haqZq6i5RwtrIqHX626ZcPHOEIZewMnK/bpEdiMO370ZopsFzg0fpT9bxZ2qzZyO07ypDP1JEPBHhdUbOpUbSazvPQlMPWZaCML0bmQv3XIU7k+JVgOZ+ZyqHCyIG6XMfMSEpZ3GAgOYOGEmkgFgHKzpEUirxxcaeJ7kOMlsqMXpYqKYqARqHpov725EvnY0VIvKa70CeYOLyKX5Ei6Se3Mgle7N6LCGMZ4aeOsQUTKVGMi9dIuIlPi6f7E5OMs7FRh7geAvRJi12n+J1EUBOdhAwHuDOkkv4fPb9ipQR10iGkBOlcZya774QyZnvcUYmStFME5dGH8VT02YWYVmHfb0bs1rEo7FscUiKIeI32cqygLtgZiSyWtArfrX9ltm3Ge8qjTTXbEjp+ZHP32reBwP2AdiK39y1xbHUPsvdja7aaS0uBl7kXeVzflvnR8Rd/2advYe/VvC2846rxUG+tqffgLX0IQbffJUi8c8hXj+9218heTtvqz49VT4q1e3HDcDRSNdsJLnntUGsa/6Vf7seNpcpBbjTNRfLyGuJ2JdowEqavsejFX1q+h5GDOBOT5gmPkQcyEUGcLTTc+rYRp4RRBZwtNOz89lAD4cJVARw1MPPnaJiCQdAHCOAI10/vpyxhNoDFXNQ1zSslnDERM2IOKC+/v2YyTWaAxUH1Nnd/okianMRB9T7C+jTIRGVAYvA2bTfA5At+mqYARFVQzTcZZU+W95fT2ZrL8/zOXs9PFA1zEVFB8kum16VTdsUeIJFvrgqZw8+A7moCvg5/VGmfm4MvMWP1mYQVUO0zH4Jp8pbHbL+BVzk7EllgEBVBSyagFO0MQubnm6+aCKy3mtfNJSzaEoRTmfw78PRfD5ni1fTBUXI/DPtgaoMSKa0PmnDttl6Xmud0UmICtJaiM9aEdV3Mk4GEKmhBje+KyNVSSEAEH1Pp8a52GKrthN5mMybap4oIeEC+alVjS622KptoIVUjXO2bgCuqbmWQRPRpRRH7Hw23bbYbI8BYdZMKWRNeUitemkOCPHSFo7YtfWlVAeEeWY6bYZiAAibM7GAYYr/Eg4+F9GQVleiHKLVUgCDlOq7CQEhtWTsVHKNxXGx2/l7g5SdeMelEQCk1wQhYQDCFM81OGLHMA3YyiHvwLuFFtI5QEhowRUx5xXm2UCNulXcGQ/5J/oSWkh/s5jQhSZyy+gMot/tLgVRDVGLQAszemciJiSQkPvufzZQO9bBxoqAlguXCvBRMaEVwwWDX/0BiF3X/KIZpqKi0ye0EJwQJIRbaCJ2E/f+VU3EqPOttHCnBBjAIIUTSULI7msEKbLhot9DIewHUVg2nEEL4QBlhEyuEW2qd3fEqJde12I8qlsSSlHdpZhCwUwhI2S237kogzjzKIp8b9pXKyHZBBvx7SUmzzB+ywitGcw14vgrnDAYspWQyTPMl0sJNx4wUZBrhhdz9GUXbCkhm2vM/Z4NK2ZLyiZCOWEIc43sZysHVAEtRPKgnJAp13TdrfSoFOYZ5PAjJ7RKmGuQopsZMUdfNs8oERYwTLGimxExeQb7v1cgtD6fNdfE0EJsHVYhdJ401zAlNnS/pULIHoSfo0FZJc8oEo5hrpH1XA4i2dH3W0qEifpBeEAxeQbf7isRKhfdBhWTZ/C5o0bIFN0G7LjkCi6GnBqSGqE1h0uivoErS1TKb0iRkCnw6xu4suANJ85BUpEwARY+wxEKLBa8soIioTWi73g/w9aUXvC5DRiqhFvqIOw9xZI/ayBm3P9zVULrs2FirqtztZ1+moQqQH7HtzIhmf8gIu1DZkTiex+U4KUnyoRWMr33R/GylgE5cd3LJnwTgTphfScyr8RbdwyJFJLn2NoQ1vXLB7obDUt0l/tvSNSp8Eck6Db5IyKUh3/QQkHX19/RZvrduTd9xsf7+5Ezy+bZbNgX+PwDVDbE+T4gHg0AAAAASUVORK5CYII="/>
    )
};
export default Loader;