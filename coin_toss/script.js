document.querySelector('.coin').style.display='none'
document.querySelector('#coin1').addEventListener('click',function()
{
	var hell=Math.floor(Math.random()*2)+1;
	console.log(hell);

	document.querySelector('.coin').style.display='block';
    //console.log(hell);

    document.querySelector('.coin').src='coin-'+hell+'.jpg'; 

}) 