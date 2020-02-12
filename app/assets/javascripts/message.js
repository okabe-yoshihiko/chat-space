$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="message__info">
           <div class="message__info__username">
             ${message.user_name}
           </div>
           <div class="message__info__timestamp">
             ${message.created_at}
           </div>
         </div>
         <div class="message__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
     `<div class="message" data-message-id=${message.id}>
            <div class="message__info">
              <div class="message__info__username">
                ${message.user_name}
              </div>
              <div class="message__info__timestamp">
                ${message.created_at}
              </div>
            </div>
            <div class="message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
     return html;
   };
 }
 $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
   .done(function(message){
     var html = buildHTML(message);
     $('.messages').append(html);      
     $('form')[0].reset();
     $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
   })
   .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})


});
    