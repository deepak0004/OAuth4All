save_name = "";
save_pass = "";

$('#submit').click(function() {

  save_name = $("#handle").val();
  save_pass = $("#password").val();

   $.ajax({
        url: 'https://deepak-thukral.com/enroll.php',
        type: 'post',
        data:{
            username: $("#handle").val(),
            password: $("#password").val()
        },
        success:function(x){
          console.log(x);
          
          var k = x.split(",")[0];
          var k2 = k.split(":")[1];

          if(k2 == "\"Success\""){
            alert("Authentication successful!");
            $('.signup').hide();
            $('.voice').show();
          }
          else{
            alert(k2);
          }
        }
      })

    });

navigator.getUserMedia = navigator.webkitGetUserMedia;
if (navigator.getUserMedia) {
  var mediaRecorder;
  var f;
  var rec = document.getElementById('record'); 

  if (navigator.getUserMedia) {
     console.log('getUserMedia supported.');
     navigator.getUserMedia(
        {
          audio: true
        },

        // Success callback
        function(stream) {
          mediaRecorder = new MediaRecorder(stream);
          
          // Record button to record voice, stop is hidden
          $('#record').click(function(){
            mediaRecorder.start();
            $(this).hide();
            $('#stop').show();
          });

          // Stop button to stop recording
          $('#stop').click(function(){
            mediaRecorder.stop();
          });

          // We are storing the voice in form of chunks with data type blob.     
          var chunks = [];
          mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);  
          }
          mediaRecorder.onstop = function(e) {
              var blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });  // With audio type wav, combine chunks
              uploadAudio(blob);
              chunks = [];
          }
        },
        function(err) {
           console.log('The following gUM error occured: ' + err);
        }
     );
  }else{
    console.log('getUserMedia not supported on your browser!');
  }
}else{
  console.log('getUserMedia not supported on your browser!');
}

counter=0;

function uploadAudio( blob ) {

  var username_session = save_name;
  var password_session = save_pass;

  console.log(username_session);

  var reader = new FileReader();
  var d = new Date();
  var n = d.getTime();
  reader.onload = function(event){
    var fd = {};
    fd["fname"] = n + ".wav";
    fd["data"] = event.target.result;
    $.ajax({
      type: 'POST',
      url: 'https://www.deepak-thukral.com/upload-blog.php',
      data: fd,
      dataType: 'text',
      beforeSend: function(){
        $("#stop").html("Sending Data...");
      }
    }).done(function(data) {
      
      $.ajax({
        url: 'https://www.deepak-thukral.com/enroll_voice.php',
        type: 'post',
        data:{
            file_name:n+".wav",
            username: username_session,
            password: password_session
        },
        success:function(x){
          console.log(x);
          
          var k = x.split(",")[0];
          var k2 = k.split(":")[1];

          if(k2 == "\"Success\""){  // Result coming in double quotes from there
            alert("Enrollment successful!");
            counter++;
            $('#make_less').html(""+(3-counter));
          }
          else{
            alert(k2);
          }

          $("#stop").hide();
          $("#stop").html("stop");
          $('#record').show();

          if(counter==3){
            $('#record').hide();
            $.ajax({
            url: 'https://deepak-thukral.com/insertlogin.php',
            type: 'post',
            data:{
                 email: save_name,
            },
            success:function(x){
				localStorage.setItem("Id",username_session);
               window.location.href="logout.html";       
            }
          });
         }
        }
      })
    });
  };
  reader.readAsDataURL(blob);
}


$('#open_auth').click(function() {
  window.location.href = 'auth.html';
});