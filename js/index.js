const PAGE = {
  init:function(){
    this.bind();
  },
  bind(){
    let booksItem = $('.books-item').get();
    for(let i=0;i<booksItem.length;i++){
      // booksItem[i].setAttribute('data-index', i);
      booksItem[i].addEventListener('click',this.swiperSwitch);
    }
  },

  swiperSwitch(){
    let id = Number(this.dataset.id);
    $.ajax({
     type:'GET',
     url:`https://www.jevescript.com/api/isbn/${id}`,
     success:(res)=>{
       console.log(res)
       let title = res.data.title;
       let image = res.data.image;
       let author = res.data.author;
       let publisher = res.data.publisher;
       let pubdate = res.data.pubdate;
       let price = res.data.price;
       let binding = res.data.binding;
       let summary = res.data.summary;
       let author_intro = res.data.author_intro;
       console.log(author_intro)
       
       let booksInfo = $('.books-info');
       let info = `
        <h3 class="subtitle">${title}</h3>
        <img src="${image}" alt="" class="image">
        <div class="container">
          <p class="author">作者: ${author}</p>
          <p class="publisher">出版社: ${publisher}</p>
          <p class="pubdate">出版年: ${pubdate}</p>
          <p class="price">定价: ${price}</p>
          <p class="binding">装帧: ${binding}</p>
          <p class="isbn13">ISBN: ${id}</p>
        </div>
        <div class="summary">
          <p class="summary-subtitle">内容简介  · · · · · ·</p>
          <span>${summary}</span>
        </div>
        <div class="author_intro">
          <p class="author_intro-subtitle">作者简介  · · · · · ·</p>
          <span>${author_intro}</span>
        </div>
       `
       booksInfo.html(info);
       console.log(booksInfo)
     }
   })
  }
}
PAGE.init()