$(function(){

$('main').load('inc.html main'); 

$.ajax({
  url:'data.json',
  success:function(data){
    var type,title,title2,title3,visImg,
    month,explanation,
    hashtag,hashtag2,hashtag3,hashtag4,
    workimgs,workimgs2,workimgs3,workimgs4,workimgs5,
    explanation2,explanation3,explanation3_1,explanation3_2,
    tagList='',tagList2='',tagList3='',tagList4='',tagList5='',tagList6='',tagList7='';

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
          tagList += "<img src="+visImg+" alt='' data-0='top:500px' data-1000='top:450px;' data-2000='top:-600px;'>";

          month = value.month;
          tagList2 += "<strong>제   작   년   도</strong>"+month+"";

          explanation = value.explanation;
          tagList3 += "<h2>EXPLANATION</h2>";
          tagList3 += "<p>"+ explanation +"</p>";

          hashtag = value.hashtag;
          hashtag2 = value.hashtag2;
          hashtag3 = value.hashtag3;
          hashtag4 = value.hashtag4;
          tagList4 += "<p data-2000='transform:translate(40%,0%); opacity:0' data-2400='transform:translate(0%,0%); opacity:1'>"+ hashtag +"</p>";
          tagList4 += "<p data-2400='transform:translate(-40%,0%); opacity:0' data-2800='transform:translate(0%,0%); opacity:1'>"+ hashtag2 +"</p>";
          tagList4 += "<p data-2800='transform:translate(40%,0%); opacity:0' data-3200='transform:translate(0%,0%); opacity:1'>"+ hashtag3 +"</p>";
          tagList4 += "<p data-3200='transform:translate(-40%,0%); opacity:0' data-3600='transform:translate(0%,0%); opacity:1'>"+ hashtag4 +"</p>";

          workimgs = value.workimgs;
          workimgs2 = value.workimgs2;
          workimgs3 = value.workimgs3;
          workimgs4 = value.workimgs4;
          workimgs5 = value.workimgs5;
          tagList5 += "<img src="+ workimgs +" alt='' data-4300='top:40%; left:100%' data-5300='top:40%; left:0%' data-6300='left:-100%'>";
          tagList5 += "<img src="+ workimgs2 +" alt='' data-4800='top:60%; left:100%' data-5800='top:60%; left:0%' data-6800='left:-100%'>";
          tagList5 += "<img src="+ workimgs3 +" alt='' data-5300='top:40%; left:100%' data-6300='top:40%; left:0%' data-7300='left:-100%'>";
          tagList5 += "<img src="+ workimgs4 +" alt='' data-5800='top:60%; left:100%' data-6800='top:60%; left:0%' data-7800='left:-100%'>";
          tagList5 += "<img src="+ workimgs5 +" alt='' data-6300='top:40%; left:100%' data-7300='top:40%; left:0%' data-8300='left:-100%'>";

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
        }
      });

      $('main .explan__first').html(tagList);
      $('main .explan__month').html(tagList2);
      $('main .explanation').html(tagList3);
      $('main .hash__text').html(tagList4);
      $('main .img__move').html(tagList5);
      $('main .explanation2').html(tagList6);
      $('main .explanation3').html(tagList7);
    }
    dataFun('parsonsbranding');
  }
});



})