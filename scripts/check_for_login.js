$.ajax({
  url: 'https://deepak-thukral.com/login_check.php',
  type: 'post',
  data:{},
  success:function(x){   
      if(x!=""){         
        window.location.href = 'logout.html';
      }
      else{
        window.location.href = 'main.html';	
      }
  }
})