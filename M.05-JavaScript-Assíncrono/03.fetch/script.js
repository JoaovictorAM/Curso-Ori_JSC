const doc = fetch('./img.jpg');

doc.then(r => r.blob())
.then(body=>{
	const blobUrl = URL.createObjectURL(body);
	const imgDom = document.querySelector('img');
	imgDom.src = blobUrl;
});