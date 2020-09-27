console.log("from foreground");

var fbad = document.createElement('div');
fbad.id = 'facebook-album-downloader';
fbad.className = 'block';
fbad.innerHTML = '<div>DOWNLOAD</div>'
document.getElementsByTagName('body')[0].appendChild(fbad);

document.getElementById("facebook-album-downloader").addEventListener("click", function () {
    getAlbum();
});

function getAlbum() {
    console.log('.....');
    window.scrollTo(0, document.body.scrollHeight);

    initiateDownload();





}

function initiateDownload() {

    let menuButtons = document.querySelectorAll('[aria-haspopup="menu"]');

    menuButtons.forEach((menuButton,i)=> {
        menuButton.id='album-menu-button-'+i
        menuButton.click();
        // menuButton.ariaExpanded = 'true'
    });

    let downloadLinks = [];

    setTimeout(() => {
        let allSpans = document.querySelectorAll('[download]');
        console.log(allSpans);

        let counter = 0;
        for (let i = 0; i < allSpans.length; i++) {
            if (allSpans[i].href) {
                counter++;
                // console.log(allSpans[i].href)
                // downloadLinks.push(allSpans[i].href)

                window.open(allSpans[i].href, "_blank");
            }
        }
        console.log('total: '+counter)
        // console.log(downloadLinks)

        location.reload();
    }, 10000)


    console.log(menuButtons.length);
    console.log(menuButtons);
}
//
// function httpGet(theUrl)
// {
//     if (window.XMLHttpRequest)
//     {// code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp=new XMLHttpRequest();
//     }
//     else
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//             let destinationSource = xmlhttp.responseText
//             console.log(xmlhttp.responseText);
//         }
//     }
//     xmlhttp.open("GET", theUrl, false);
//     xmlhttp.send();
// }
