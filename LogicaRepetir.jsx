/*
function comprobar(random,num,valores){
  var contador = 0;

  if(num[0]==random[0]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[0]!=random[1]&&num[0]!=random[2]&&num[0]!=random[3]){
      valores[2]=valores[2]+1;
    }
    else{
      if(num[1]!=random[1]&&num[2]!=random[2]&&num[3]!=random[3]){
          valores[1]=valores[1]+1;
      }
      else{
          if(num[0]==random[1]&&num[1]!=random[1]){
            contador = contador + 1;
          }
          if(num[0]==random[2]&&num[2]!=random[2]){
            contador = contador + 1;
          }
          if(num[0]==random[3]&&num[3]!=random[3]){
            contador = contador + 1;
          }
          if(contador>=1){
            valores[1]=valores[1]+1;
          }
          else{
            valores[2]=valores[2]+1;
          }
        } 
      }
    }




  if(num[1]==random[1]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[1]!=random[0]&&num[1]!=random[2]&&num[1]!=random[3]){
      valores[2]=valores[2]+1;
    }
    else{
      if(num[0]!=random[0]&&num[2]!=random[2]&&num[3]!=random[3]){
        valores[1]=valores[1]+1;
      }
      else{
        if(num[1]==random[0]&&num[0]!=random[0]){
          contador = contador + 1;
        }
        if(num[1]==random[2]&&num[2]!=random[2]){
          contador = contador + 1;
        }
        if(num[1]==random[3]&&num[3]!=random[3]){
          contador = contador + 1;
        }
        if(contador>=1){
          valores[1]=valores[1]+1;
        }
        else{
          valores[2]=valores[2]+1;
        }
      } 
    }
  }



  if(num[2]==random[2]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[2]!=random[0]&&num[2]!=random[1]&&num[2]!=random[3]){
      valores[2]=valores[2]+1;
    }
    else{
      if(num[0]!=random[0]&&num[1]!=random[1]&&num[3]!=random[3]){
        valores[1]=valores[1]+1;
      }
      else{
        if(num[2]==random[0]&&num[0]!=random[0]){
          contador = contador + 1;
        }
        if(num[2]==random[1]&&num[1]!=random[1]){
          contador = contador + 1;
        }
        if(num[2]==random[3]&&num[3]!=random[3]){
          contador = contador + 1;
        }
        if(contador>=1){
          valores[1]=valores[1]+1;
        }
        else{
          valores[2]=valores[2]+1;
        }
      } 
    }
  }


  if(num[3]==random[3]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[3]!=random[0]&&num[3]!=random[1]&&num[3]!=random[2]){
      valores[2]=valores[2]+1;
    }
    else{
      if(num[0]!=random[0]&&num[1]!=random[1]&&num[2]!=random[2]){
        valores[1]=valores[1]+1;
      }
      else{
        if(num[3]==random[0]&&num[0]!=random[0]){
          contador = contador + 1;
        }
        if(num[3]==random[1]&&num[1]!=random[1]){
          contador = contador + 1;
        }
        if(num[3]==random[2]&&num[2]!=random[2]){
          contador = contador + 1;
        }
        if(contador>=1){
          valores[1]=valores[1]+1;
        }
        else{
          valores[2]=valores[2]+1;
        }
      } 
    }
  }
  return valores;
}
*/