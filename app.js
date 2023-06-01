const hideButton = document.getElementById('sub');
const pageContent = document.getElementById('page1');
const pageContent2 = document.getElementById('page2');
const returnn = document.getElementById('dimiss');
hideButton.addEventListener('click', function () {
pageContent.style.display='none';
pageContent2.style.display='block';
}
);
returnn.addEventListener('click', function () {
    pageContent.style.display='block';
    pageContent2.style.display='none';
    }
);