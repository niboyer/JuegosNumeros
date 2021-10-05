/* const random = getRndInteger(1000,9999);

  La const random es el numero que se genera por la funcion (el que hay que adivinar) y la funcion en si se encarga de asegurarse que no se repiten los nros

  const prueba = '1234';
  const num = prueba;

  Const prueba y num son lo mismo porque queria ver si funcionaba la logica de comparar numero si le daba uno fijo al menos

  const bien = 0;
  const reg = 0;
  const mal = 0;
  const valores = [bien,reg,mal];

  Const bien,reg y mal son los 3 datos del vector valores que se actualizan dependiendo la comparacion y a esos se les suma, son los que habria que poner en colores

  const datos = comprobar(random,num,valores);

  Const datos es el vector final con los datos actualizados para tenerlos guardados
*/

/*
  return (
    <View style={styles.container}>
      <Text>El numero generado es: {random}</Text>
      <Text>Num: {num}</Text>
      <Text>Cant Bien: {valores[0]}</Text>
      <Text>Cant Reg: {valores[1]}</Text>
      <Text>Cant Mal: {valores[2]}</Text>
      <TextInput 
        style={styles.input}
        placeholder = 'Ingrese numero'
        onChangeText={(value)=> setPrueba(value)}
      />
      <Text>Numero: {prueba}</Text>
      <StatusBar style="auto" />
    </View>
  );

  Esto era solo para probar y me tomaba bien los bien/reg/mal comparado con el numero random
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
*/


/*
function getRndInteger(min, max) {
  let valor = Math.floor(Math.random() * (max - min + 1) ) + min;
  const a = valor.toString();
  if(a[0]==a[1]||a[0]==a[2]||a[0]==a[3]||a[1]==a[2]||a[1]==a[3]||a[2]==a[3]){
    let salir = 0;
    while (salir == 0 ){
      valor = Math.floor(Math.random() * (max - min + 1) ) + min;
      const a = valor.toString();
      if(a[0]!=a[1]&&a[0]!=a[2]&&a[0]!=a[3]&&a[1]!=a[2]&&a[1]!=a[3]&&a[2]!=a[3]){
        salir=1;
      }
    }
  }
  return valor.toString();
}

La funcion esta lo que hace es generar el numero random con los valores pasados y despues lo pasa a string para comparar caracter a caracter si son iguales
Compara el 1 con el 2/3/4 y así hasta que le diga que todos son distintos y devuelva el valor generado
*/

/*
function comprobar(random,num,valores){
  if(num[0]==random[0]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[0]==random[1]||num[0]==random[2]||num[0]==random[3]){
      valores[1]=valores[1]+1;
    }
    else{
      valores[2]=valores[2]+1;
    }
  }
  if(num[1]==random[1]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[1]==random[0]||num[1]==random[2]||num[1]==random[3]){
      valores[1]=valores[1]+1;
    }
    else{
      valores[2]=valores[2]+1;
    }
  }
  if(num[2]==random[2]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[2]==random[0]||num[2]==random[1]||num[2]==random[3]){
      valores[1]=valores[1]+1;
    }
    else{
      valores[2]=valores[2]+1;
    }
  }
  if(num[3]==random[3]){
    valores[0]=valores[0]+1;
  }
  else{
    if(num[3]==random[0]||num[3]==random[1]||num[3]==random[2]){
      valores[1]=valores[1]+1;
    }
    else{
      valores[2]=valores[2]+1;
    }
  }
  return valores;
}

Esta funcion es la que compara el numero que escribimos(en este caso uno fijo que yo ponia) con el random
Compara ambos como strings, primero compara si las posiciones son iguales para sumar a bien si son el mismo numero
Si no pasa eso, compara el numero con los demas para ver si esta regular y sumar
Y sino suma a mal
 */