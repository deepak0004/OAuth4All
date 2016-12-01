navigator.getUserMedia = (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.webkitGetUserMedia);

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

          $('#record').click(function(){
            mediaRecorder.start();
            $(this).hide();
            $('#stop').show();
          });

          $('#stop').click(function(){
            mediaRecorder.stop();
          });

          var chunks = [];
          mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
          }
          mediaRecorder.onstop = function(e) {
              var blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=opus' });
              uploadAudio(blob);
              chunks = [];
          }
        },
        function(err) {
           console.log('The following gUM error occured: ' + err);
        }
     );
  }
  else{
    console.log('getUserMedia not supported on your browser!');
  }
}
else{
  console.log('getUserMedia not supported on your browser!');
}

function uploadAudio( blob ) {
  var reader = new FileReader();
  var d = new Date();
  var n = d.getTime();
  reader.onload = function(event){
    var fd = {};
    fd["fname"] = n+".wav";
    fd["data"] = event.target.result;
    $.ajax({
      type: 'POST',
      url: 'https://deepak-thukral.com/upload-blog.php', 
      data: fd,
      dataType: 'text',
      beforeSend: function(){
        $("#stop").html("Sending Data...");
      }
    }).done(function(data) {
      
      $.ajax({
        url: 'https://deepak-thukral.com/authenticate.php',
        type: 'post',
        data:{
        	file_name:n+".wav",
        	username: $('#username').val(),
        	password: $('#password').val()
        },
        success:function(x){
          console.log(x);
          var k = x.split(",")[0];
          var k2 = k.split(":")[1];
          var k3 = k2.split(".")[0];
          //alert(k2);

          if(k3 == "\"Authentication successful"){
             $.ajax({
                url: 'https://deepak-thukral.com/insertlogin.php',
                type: 'post',
                data:{
                  email: $('#username').val(),
                },
                success:function(x){
                  alert("Authentication successful!");
				  localStorage.setItem("Id",$('#username').val());
                  window.location.href = "logout.html";
                }
          });
        }
          else{
          	alert(k3);
          }

          $("#stop").hide();
          $("#stop").html("Stop Recording...");
          $('#record').show();
        }
      })

    });
  };
  reader.readAsDataURL(blob);
}