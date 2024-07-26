  var urls = 
        ['https://mikrodinet.eu.org/', 
        'https://square.mikrodinet.eu.org',
        'https://ace.mikrodinet.eu.org/',
        'https://dev.mikrodinet.eu.org/',
        'https://ace.mikrodinet.eu.org',
        'https://id.mikrodinet.eu.org',
        'https://wiki.mikrodinet.eu.org',
        'https://blog.mikrodinet.eu.org',
        'https://app.mikrodinet.eu.org',
        'https://web.mikrodinet.eu.org',
        'https://go.mikrodinet.eu.org',
        'https://us.mikrodinet.eu.org',
        'https://search.mikrodinet.eu.org',
        'https://s.mikrodinet.eu.org',
        'https://dev.mikrodinet.eu.org',
        'https://docker.mikrodinet.eu.org',
        'https://qr.mikrodinet.eu.org',
        'https://aframe.mikrodinet.eu.org',
        'https://paint.mikrodinet.eu.org',
        'https://seo.mikrodinet.eu.org',
        'https://www.mikrodinet.eu.org',
        'https://mikrodinet.eu.org/super',
        'https://mikrodinet.eu.org/ace',
        'https://mikrodinet.eu.org/made',
        'https://mikrodinet.eu.org/docker',
        'https://mikrodinet.eu.org/hint',
        'https://mikrodinet.eu.org/awdev',
        'https://mikrodinet.eu.org/cloud',
        'https://mikrodinet.eu.org/aframe',
        'https://mikrodinet.eu.org/qr',
        ];

        var $button = document.getElementById("button");

        $button.addEventListener("click", function() {
            for(i in urls) {
                var url = urls[i];
                var $a = document.createElement("a");
                $a.setAttribute("href", url);
                $a.setAttribute("target", "_blank");
                $a.click();
            }
        });
