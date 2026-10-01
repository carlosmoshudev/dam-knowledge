---
title: 'Unidad 1: Conceptos básicos de Java'
description: Fundamentos de programación, estructura de un programa Java, tipos de datos, operadores y entrada y salida por consola.
sidebar:
  order: 2
  label: 'Unidad 1: Conceptos básicos de Java'
---

En esta unidad se presentan los fundamentos de Java y las herramientas
necesarias para escribir, compilar y ejecutar los primeros programas.

## 1. Introducción a la Programación y al Lenguaje Java
* **Programación**: Proceso de escribir instrucciones detalladas para que un ordenador ejecute tareas específicas (creación de software).
* **Código Fuente y Código Objeto**:
  * **Código fuente**: Texto escrito por el programador siguiendo la sintaxis del lenguaje (`.java`).
  * **Código objeto**: Resultado de traducir el código fuente a un formato ejecutable por la computadora.
* **Lenguajes Compilados vs. Interpretados**:
  * **Compilados** (ej. C, C++): Se traducen totalmente a ejecutable (`.exe`) una sola vez mediante un compilador específico para cada sistema operativo.
  * **Interpretados** (ej. Python, JavaScript): Un intérprete traduce y ejecuta el código línea por línea en tiempo de ejecución.
* **El modelo híbrido de Java y la JVM**:
  * Java combina ambos modelos bajo la filosofía **WORA** (*Write once, run anywhere*).
  * El código fuente (`.java`) se compila con `javac` a un código intermedio llamado **bytecode** (`.class`).
  * La **Máquina Virtual de Java (JVM)** interpreta y ejecuta dicho bytecode en cualquier plataforma (Windows, Linux, macOS) que disponga de una JVM instalada.
* **Ediciones de Java**:
  * **Java SE** (*Standard Edition*): Edición estándar para aplicaciones de escritorio y consola.
  * **Java EE** (*Enterprise Edition*): Orientada a entornos corporativos, web y servidor.
  * **Java ME** (*Micro Edition*): Diseñada para dispositivos pequeños e incrustados.
* **Entorno de Desarrollo y Ejecución**:
  * **JRE** (*Java Runtime Environment*): Incluye la JVM y las librerías estándar. Necesario para *ejecutar* aplicaciones Java.
  * **JDK** (*Java Development Kit*): Incluye el JRE, el compilador `javac`, depurador (`debugger`) y herramientas de desarrollo. Imprescindible para *programar*.
* **Distribuciones del JDK**: Oracle JDK, OpenJDK (referencia de código abierto) y Amazon Corretto.
* **Extensiones de archivo**:
  * `.java`: Código fuente escrito por el desarrollador.
  * `.class`: Bytecode compilado que ejecuta la JVM.
  * `.jar`: Archivo empaquetado (tipo ZIP) que contiene múltiples `.class` y recursos para distribución.

---

## 2. Herramientas y Estructura de un Programa Java
* **Entornos de Desarrollo Integrado (IDE)**:
  * Aunque basta con un editor de texto plano (Bloc de notas) y el JDK, se usan IDEs que facilitan el desarrollo: NetBeans, Eclipse, Visual Studio Code e IntelliJ IDEA.
* **Compilación y Ejecución por Consola**:
  * Compilación: `javac NombrePrograma.java` (genera `NombrePrograma.class`).
  * Ejecución: `java NombrePrograma`.
* **Estructura Básica**:
  * **Paquete (`package`)**: Primera línea (opcional pero recomendada), indica el contenedor u organización de carpetas (ej. `package ejemplo;`).
  * **Importaciones (`import`)**: Incorpora clases de otros paquetes (ej. `import java.util.Scanner;`).
  * **Clase Principal**: El nombre de la clase pública debe coincidir exactamente con el nombre del archivo `.java` (sensible a mayúsculas/minúsculas).
  * **Método `main`**: Punto de entrada obligatorio de todo programa Java ejecutable:
    ```java
    public static void main(String[] args) {
        // Código ejecutable
    }
    ```
  * **Bloques y Sentencias**: Los bloques se delimitan por llaves `{}`. Cada instrucción o sentencia finaliza obligatoriamente con punto y coma (`;`).
* **Identificadores**:
  * Nombres asignados a variables, clases y métodos.
  * Pueden contener letras (mayúsculas/minúsculas), números, `_` y `$`.
  * **No** pueden empezar por número ni coincidir con palabras reservadas.
  * Java es estrictamente **sensible a mayúsculas y minúsculas** (*case-sensitive*).
* **Comentarios**:
  * Una línea: `// comentario`
  * Multilínea: `/* comentario */`
* **Palabras Reservadas**: Alrededor de 50 palabras clave (`public`, `class`, `static`, `void`, `int`, `double`, `if`, etc.) que no pueden usarse como identificadores.

---

## 3. Variables, Tipos de Datos y Constantes
* **Concepto de Variable**: Unidad básica de almacenamiento en memoria con un tipo, un nombre (identificador) y un valor. Debe declararse antes de usarse.
* **Inferencia de Tipos (`var`)**: Introducida desde Java 10/17. Permite omitir el tipo explícito cuando se inicializa en la declaración (ej. `var x = 10L;`). Java mantiene el tipado fuerte y estático.
* **Ámbito y Tiempo de Vida**:
  * Las variables creadas dentro de un bloque `{}` solo son visibles y accesibles dentro de dicho bloque.
  * Se destruyen al salir del ámbito de llaves.
* **Tipos Primitivos (8 tipos simples)**:
  * **Enteros (con signo)**:
    * `byte` (8 bits, rango -128 a 127)
    * `short` (16 bits, rango -32,768 a 32,767)
    * `int` (32 bits, tipo por defecto para enteros)
    * `long` (64 bits, sufijo `L` o `l`, ej. `875L`)
  * **Punto Flotante (Reales/Decimales)**:
    * `float` (32 bits, requiere sufijo `f` o `F`, ej. `15.8f`)
    * `double` (64 bits, tipo decimal por defecto, ej. `3.1416`)
  * **Caracteres**:
    * `char` (16 bits, codificación Unicode, valores de 0 a 65 535). Se escriben entre comillas simples (ej. `'a'`, `'ñ'`).
  * **Booleanos**:
    * `boolean` (valores `true` o `false`).
* **Cadenas de Texto (`String`)**:
  * No es un tipo primitivo, es una clase de objeto (`java.lang.String`).
  * Se encierran entre comillas dobles (ej. `"Hola mundo"`).
  * Admiten **secuencias de escape**: `\n` (salto de línea), `\t` (tabulador), `\"` (comilla doble), `\\` (barra invertida).
* **Constantes**:
  * Variables cuyo valor no cambia durante la ejecución. Se definen con la palabra clave `final` (ej. `final double PI = 3.141592;`).
  * Por convención, sus identificadores se escriben en MAYÚSCULAS.

---

## 4. Operadores y Conversión de Tipos (Casting)
* **Operadores Aritméticos**:
  * Suma (`+`), Resta (`-`), Multiplicación (`*`), División (`/`), Módulo/Resto (`%`).
  * Incremento (`++`) y Decremento (`--`):
    * Prefijo (`++a`): Incrementa primero y luego evalúa.
    * Posfijo (`a++`): Evalúa primero y luego incrementa.
  * Asignación compuesta: `+=`, `-=`, `*=`, `/=`, `%=`.
* **Precedencia de Operadores**:
  1. Incrementos/decrementos (`++`, `--`)
  2. Multiplicación, división y módulo (`*`, `/`, `%`)
  3. Suma y resta (`+`, `-`)
  * El uso de paréntesis `()` altera la prioridad por encima de las reglas estándar.
* **Conversión de Tipos (Casting)**:
  * **Implícita (Promoción automática)**: Se produce cuando el tipo destino es mayor que el de origen (ej. asignar `int` a `double`).
  * **Explícita (Casting)**: Necesaria entre tipos incompatibles o al pasar de un tipo mayor a uno menor. Sintaxis: `(tipo) valor` (ej. `int resul = (int) PI;`). Puede causar pérdida de precisión o decimales.
* **Cuidado con la División Entera**:
  * Si ambos operandos son enteros (`int / int`), Java realiza una división entera descartando los decimales (ej. `5 / 2` resulta en `2`).
  * Para obtener decimales, al menos uno de los operandos debe ser de tipo real o sufrir casting explícito: `(double) 5 / 2` o `5 / 2.0`.

---

## 5. Entrada y Salida por Consola
* **Salida de Datos**:
  * `System.out.println("Texto");`: Muestra el mensaje y realiza un salto de línea.
  * `System.out.print("Texto");`: Muestra el mensaje sin salto de línea.
  * Concatenación mediante el operador `+` (ej. `System.out.println("Suma: " + resultado);`).
* **Entrada de Datos con `Scanner`**:
  * Requiere importar la clase: `import java.util.Scanner;`.
  * Instanciación del objeto: `Scanner teclado = new Scanner(System.in);`.
  * Métodos de lectura:
    * `teclado.nextInt()`: Lee un número entero.
    * `teclado.nextDouble()` / `nextFloat()`: Lee un número con decimales (por consola en español se introduce con coma `,`).
    * `teclado.nextLine()`: Lee una línea completa de texto como `String`.
    * `teclado.nextLine().charAt(0)`: Lee el primer carácter introducido.
* **Solución al "Bug" de Lectura con `Scanner`**:
  * Al leer un valor numérico (`nextInt()`, `nextDouble()`) y posteriormente llamar a `nextLine()`, este último captura el retorno de carro (`\n` / `<ENTER>`) restante y devuelve una cadena vacía.
  * **Soluciones**:
    1. Añadir una llamada intermedia de limpieza: `teclado.nextLine();`.
    2. Leer siempre con `nextLine()` y convertir la cadena al tipo numérico deseado:
       * `Integer.parseInt(teclado.nextLine())`
       * `Float.parseFloat(teclado.nextLine())`
