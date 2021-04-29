$(function(){

$('main').load('inc.html main'); 

$.ajax({
  url:'data.json',
  success:function(data){
    var type,title,title2,title3,visImg,
    month,explanation,
    hashtag,hashtag2,hashtag3,hashtag4,
    workimgs,workimgs2,workimgs3,
    explanation2,explanation3,explanation3_1,explanation3_2,
    hashImg,hashImg2,hashImg3,hashImg4,hashImg5,
    tagList='',tagList2='',tagList3='',tagList4='',tagList5='',tagList6='',tagList7='',tagList8='';

    function dataFun(ty){

      data.gallery.forEach(function(value, key){

        if(value.type == ty){
          type = value.type;
          title = value.title;
          title2 = value.title2;
          title3 = value.title3;
          visImg = value.visImg;
          tagList += "<div class='explan__worktitle' data-type="+ type +">";
          tagList += "<p>"+ title +"</p>";
          tagList += "<p>"+ title2 +"</p>";
          tagList += "<p>"+ title3 +"</p>";
          tagList += "</div>";
          tagList += "<span class='explan__arrow'></span>";
          tagList += "<img src="+visImg+" alt='' data-0='top:550px' data-1000='top:520px;' data-2000='top:-600px;'>";

          month = value.month;
          tagList2 += "<strong>제   작   년   도</strong>"+month+"";

          explanation = value.explanation;
          tagList3 += "<h2>EXPLANATION</h2>";
          tagList3 += "<p>"+ explanation +"</p>";

          hashtag = value.hashtag;
          hashtag2 = value.hashtag2;
          hashtag3 = value.hashtag3;
          hashtag4 = value.hashtag4;
          tagList4 += "<p data-1500='transform:translate(30%,0%); opacity:0' data-2000='transform:translate(5%,0%); opacity:1' data-2300='opacity:1' data-2800='opacity:0' data-4000='opacity:0' data-4500='opacity:0.5'>"+ hashtag +"</p>";
          tagList4 += "<p data-1500='transform:translate(-30%,0%); opacity:0' data-2000='transform:translate(-5%,0%); opacity:0.5' data-2300='opacity:0.5' data-2800='opacity:0' data-4000='opacity:0' data-4500='opacity:1'>"+ hashtag2 +"</p>";
          tagList4 += "<p data-1500='transform:translate(30%,0%); opacity:0' data-2000='transform:translate(5%,0%); opacity:1' data-2300='opacity:1' data-2800='opacity:0' data-4000='opacity:0' data-4500='opacity:0.5'>"+ hashtag3 +"</p>";
          tagList4 += "<p data-1500='transform:translate(-30%,0%); opacity:0' data-2000='transform:translate(-5%,0%); opacity:0.5' data-2300='opacity:0.5' data-2800='opacity:0' data-4000='opacity:0' data-4500='opacity:1'>"+ hashtag4 +"</p>";

          workimgs = value.workimgs;
          workimgs2 = value.workimgs2;
          workimgs3 = value.workimgs3;
          tagList5 += "<img src="+ workimgs +" alt='' data-5300='left:0%; opacity:0' data-5700='left:20%; opacity:1'>";
          tagList5 += "<img src="+ workimgs2 +" alt='' data-5300='right:0%; opacity:0' data-5700='right:15%; opacity:1'>";
          tagList5 += "<img src="+ workimgs3 +" alt='' data-5300='right:0%; opacity:0' data-5700='right:25%; opacity:1'>";

          explanation2 = value.explanation2;
          tagList6 += "<h2>EXPLANATION</h2>";
          tagList6 += "<p>"+ explanation2 +"</p>";

          explanation3 = value.explanation3;
          explanation3_1 = value.explanation3_1;
          explanation3_2 = value.explanation3_2;
          tagList7 += "<h2>USE</h2>";
          tagList7 += "<p>"+explanation3+"</p>";
          tagList7 += "<p>"+explanation3_1+"</p>";
          tagList7 += "<p>"+explanation3_2+"</p>";

          hashImg = value.hashImg;
          hashImg2 = value.hashImg2;
          hashImg3 = value.hashImg3;
          hashImg4 = value.hashImg4;
          hashImg5 = value.hashImg5;
          tagList8 += "<img src="+hashImg+" alt='' data-2200='bottom:-50%' data-3200='bottom:105%'>";
          tagList8 += "<img src="+hashImg2+" alt='' data-2500='bottom:-50%' data-3500='bottom:105%'>";
          tagList8 += "<img src="+hashImg3+" alt='' data-2800='bottom:-50%' data-3800='bottom:105%'>";
          tagList8 += "<img src="+hashImg4+" alt='' data-3100='bottom:-50%' data-4100='bottom:105%'>";
          tagList8 += "<img src="+hashImg5+" alt='' data-3400='bottom:-50%' data-4400='bottom:105%'>";
          tagList8 += "<img src="+hashImg5+" alt='' data-2200='top:-50%' data-3200='top:105%'>";
          tagList8 += "<img src="+hashImg4+" alt='' data-2500='top:-50%' data-3500='top:105%'>";
          tagList8 += "<img src="+hashImg3+" alt='' data-2800='top:-50%' data-3800='top:105%'>";
          tagList8 += "<img src="+hashImg2+" alt='' data-3100='top:-50%' data-4100='top:105%'>";
          tagList8 += "<img src="+hashImg+" alt='' data-3400='top:-50%' data-4400='top:105%'>";
        }
      });

      $('main .explan__first').html(tagList);
      $('main .explan__month').html(tagList2);
      $('main .explanation').html(tagList3);
      $('main .hash__text').html(tagList4);
      $('main .img__move').html(tagList5);
      $('main .explanation2').html(tagList6);
      $('main .explanation3').html(tagList7);
      $('main .hash__img').html(tagList8);
    }
    dataFun('daonpension');
  }
});



})