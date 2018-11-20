var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //REACT_______________________________

//array of sections for navigation__________________
var sections = [
{ section: 'Introduction', href: '#Introduction' },
{ section: 'What you should already know', href: '#What_you_should_already_know' },
{ section: 'Javascript and Java', href: '#JavaScript_and_Java' },
{ section: 'Hello world', href: '#Hello_world' },
{ section: 'Variables', href: '#Variables' },
{ section: 'Declaring variables', href: '#Declaring_variables' },
{ section: 'Variable scope', href: '#Variable_scope' },
{ section: 'Global variables', href: '#Global_variables' },
{ section: 'Constants', href: '#Constants' },
{ section: 'Data Types', href: '#Data_types' },
{ section: 'if...else statement', href: '#if...else_statement' },
{ section: 'while statement', href: '#while_statement' },
{ section: 'Function declarations', href: '#Function_declarations' },
{ section: 'Reference', href: '#Reference' }];



//Navigation Bar Component--------------------------------
var Navigation = function (_React$Component) {_inherits(Navigation, _React$Component);function Navigation() {_classCallCheck(this, Navigation);return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));}_createClass(Navigation, [{ key: 'render', value: function render()
    {
      //create links for navigations using sections array----------------
      navlinks = sections.map(function (a) {
        return (
          React.createElement('a', { 'class': 'nav-link', href: a.href }, React.createElement('li', null, a.section.toUpperCase())));

      });
      //render navbar-----
      return (
        React.createElement('div', null,
          React.createElement('nav', { id: 'navbar' },
            React.createElement('header', null, React.createElement('strong', null, 'Contents')),
            React.createElement('ul', null,
              navlinks))));




    } }]);return Navigation;}(React.Component);

//--------------------------------------------------------------



//Main Documentation Component---------------------------
var MainDoc = function (_React$Component2) {_inherits(MainDoc, _React$Component2);function MainDoc() {_classCallCheck(this, MainDoc);return _possibleConstructorReturn(this, (MainDoc.__proto__ || Object.getPrototypeOf(MainDoc)).apply(this, arguments));}_createClass(MainDoc, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement('main', { id: 'main-doc' },
            React.createElement('header', { id: 'header' }, ' ', React.createElement('strong', null, 'JS Documentation ')),
            React.createElement('section', { id: 'Introduction', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header1' }, 'Introduction'),
              React.createElement('article', null,
                React.createElement('p', { 'class': 'p1' }, 'JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.'),

                React.createElement('p', { 'class': 'p2' }, 'JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:'),
                React.createElement('ul', { 'class': 'list1' },
                  React.createElement('li', null, 'Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.'),
                  React.createElement('li', null, 'Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.')))),





            React.createElement('section', { id: 'What_you_should_already_know', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header2' }, 'What you should already know'),

              React.createElement('article', null,
                React.createElement('p', null, 'This guide assumes you have the following basic background:'),

                React.createElement('li', null, 'A general understanding of the Internet and the World Wide Web (WWW).'),
                React.createElement('li', null, 'Good working knowledge of HyperText Markup Language (HTML).'),
                React.createElement('li', null, 'Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.'))),





            React.createElement('section', { id: 'JavaScript_and_Java', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header3' }, 'JavaScript and Java'),

              React.createElement('article', null,
                React.createElement('p', null, 'JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java\'s static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.'),

                React.createElement('p', null, 'In contrast to Java\'s compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.'),
                React.createElement('p', null, 'JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.'))),





            React.createElement('section', { id: 'Hello_world', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header4' }, 'Hello world'),

              React.createElement('article', null, 'To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:',

                React.createElement('code', null, 'function greetMe(yourName) {\n  alert("Hello " + yourName);\n}\ngreetMe("World");\n      '), 'Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!')),










            React.createElement('section', { id: 'Variables', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header5' }, 'Variables'),

              React.createElement('article', null,
                React.createElement('p', null, 'You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.'),


                React.createElement('p', null, 'A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).'),


                React.createElement('p', null, 'You can use ISO 8859-1 or Unicode letters such as \xE5 and \xFC in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.'))),








            React.createElement('section', { id: 'Declaring_variables', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header6' }, 'Declaring variables'),

              React.createElement('article', null, 'You can declare a variable in three ways:',

                React.createElement('p', null, 'With the keyword var. For example,         ',
                  React.createElement('code', null, 'var x = 42.'), ' This syntax can be used to declare both local and global variables.'),

                React.createElement('p', null, 'By simply assigning it a value. For example, ',
                  React.createElement('code', null, 'x = 42.'), ' This always declares a global variable. It generates a strict JavaScript warning. You shouldn\'t use this variant.'),

                React.createElement('p', null, 'With the keyword let. For example,       ',
                  React.createElement('code', null, ' let y = 13.'), ' This syntax can be used to declare a block scope local variable. See Variable scope below.'))),





            React.createElement('section', { id: 'Variable_scope', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header7' }, 'Variable scope'),

              React.createElement('article', null,
                React.createElement('p', null, ' When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.'),

                React.createElement('p', null, 'JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement.'),
                React.createElement('code', null, 'if (true) {\n  var x = 5;\n}\nconsole.log(x);  // 5'),



                React.createElement('p', null, 'This behavior changes, when using the let declaration introduced in ECMAScript 2015.'),

                React.createElement('code', null, 'if (true) {\n  let y = 5;\n}\nconsole.log(y);  \n// ReferenceError: y is not defined'))),







            React.createElement('section', { 'class': 'main-section', id: 'Global_variables' },
              React.createElement('header', null, 'Global variables'),
              React.createElement('article', null,
                React.createElement('p', null, 'Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax.'),

                React.createElement('p', null, 'Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.'))),




            React.createElement('section', { id: 'Constants', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header9' }, 'Constants'),


              React.createElement('article', null,
                React.createElement('p', null, 'You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic, numeric, or underscore characters.'),

                React.createElement('code', null, 'const PI = 3.14;'),
                React.createElement('p', null, 'A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value.'),

                React.createElement('p', null, 'The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable.'),

                React.createElement('p', null, 'You cannot declare a constant with the same name as a function or variable in the same scope. For example:'),

                React.createElement('code', null, '// THIS WILL CAUSE AN ERROR\nfunction f() {};\nconst f = 5;\n// THIS WILL CAUSE AN ERROR ALSO\nfunction f() {\n  const g = 5;\n  var g;\n  //statements\n}'), 'However, object attributes are not protected, so the following statement is executed without problems.',









                React.createElement('code', null, 'const MY_OBJECT = {"key": "value"};\nMY_OBJECT.key = "otherValue"'))),





            React.createElement('section', { id: 'Data_types', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header10' }, 'Data types'),

              React.createElement('article', null,
                React.createElement('p', null, 'The latest ECMAScript standard defines seven data types:'),
                React.createElement('p', null, 'Six data types that are primitives:'),
                React.createElement('ul', null,
                  React.createElement('li', null, 'Boolean. true and false.'),
                  React.createElement('li', null, 'null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.'),
                  React.createElement('li', null, 'undefined. A top-level property whose value is undefined.'),
                  React.createElement('li', null, 'Number. 42 or 3.14159.'),
                  React.createElement('li', null, 'String. "Howdy"'),
                  React.createElement('li', null, 'Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.')),
                React.createElement('li', null, 'and Object'), 'Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.')),




            React.createElement('section', { id: 'if...else_statement', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header11' }, 'if...else statement'),

              React.createElement('article', null, 'Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:',


                React.createElement('code', null, 'if (condition) {\n  statement_1;\n} else {\n  statement_2;\n}'), 'condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.',





                React.createElement('p', null, 'You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:'),


                React.createElement('code', null, 'if (condition_1) {\n  statement_1;\n} else if (condition_2) {\n  statement_2;\n} else if (condition_n) {\n  statement_n;\n} else {\n  statement_last;\n} '), 'In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement (',








                '{ ... }', '\') . In general, it\'s good practice to always use block statements, especially when nesting if statements:',

                React.createElement('code', null, 'if (condition) {\n  statement_1_runs_if_condition_is_true;\n  statement_2_runs_if_condition_is_true;\n} else {\n  statement_3_runs_if_condition_is_false;\n  statement_4_runs_if_condition_is_false;\n}'), 'It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:',







                React.createElement('code', null, 'if (x = y) {\n  /* statements here */\n}'), 'If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:',




                React.createElement('code', null, 'if ((x = y)) {\n  /* statements here */\n}'))),





            React.createElement('section', { id: 'while_statement', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header12' }, 'while statement'),

              React.createElement('article', null, 'A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:',


                React.createElement('code', null, 'while (condition)\n  statement'), 'If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.',



                React.createElement('p', null, 'The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.'),

                React.createElement('p', null, 'To execute multiple statements, use a block statement (', '{ ... }', ') to group those statements.'), 'Example:',



                React.createElement('p', null, 'The following while loop iterates as long as n is less than three:'),

                React.createElement('code', null, 'var n = 0;\nvar x = 0;\nwhile (n < 3) {\n  n++;\n  x += n;\n}'),





                React.createElement('p', null, 'With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:'),

                React.createElement('li', null, 'After the first pass: n = 1 and x = 1'),
                React.createElement('li', null, 'After the second pass: n = 2 and x = 3'),
                React.createElement('li', null, 'After the third pass: n = 3 and x = 6'),
                React.createElement('p', null, 'After completing the third pass, the condition n &lt 3 is no longer true, so the loop terminates.'))),




            React.createElement('section', { id: 'Function_declarations', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header13' }, 'Function declarations'),

              React.createElement('article', null, 'A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:',


                React.createElement('li', null, 'The name of the function.'),
                React.createElement('li', null, 'A list of arguments to the function, enclosed in parentheses and separated by commas.'),
                React.createElement('li', null, 'The JavaScript statements that define the function, enclosed in curly brackets, ', '.'),
                React.createElement('p', null, 'For example, the following code defines a simple function named square:'),

                React.createElement('code', null, 'function square(number) {\n  return number * number;\n}'),


                React.createElement('p', null, 'The function square takes one argument, called number. The function consists of one statement that says to return the argument of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function.'),

                React.createElement('code', null, 'return number * number;'),
                React.createElement('p', null, 'Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.'))),





            React.createElement('section', { id: 'Reference', 'class': 'main-section' },
              React.createElement('header', { 'class': 'header14' }, 'Reference'),

              React.createElement('article', null,
                React.createElement('li', null, 'All the documentation in this page is taken from ', React.createElement('a', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', target: '_blank' }, 'MDN')))))));






    } }]);return MainDoc;}(React.Component);

//------------------------------------------------------------------------



//putting everything together----------------------------------------
var App = function (_React$Component3) {_inherits(App, _React$Component3);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this3.handleClick = _this3.handleClick.bind(_this3);
    _this3.state = {
      display: true };return _this3;

  }_createClass(App, [{ key: 'handleClick', value: function handleClick()

    {
      //for smaller screens----------------------------------------
      $('#menu').toggleClass('fa-bars');
      $('#menu').toggleClass('fa-times'); //toggle between menu and close icon

      //animation
      $('#menu').addClass('rotate');
      setTimeout(function () {$('#menu').removeClass('rotate');}, 500);
      //check if menu is in display or hidden---------------------
      this.setState({
        display: !this.state.display });

      if (this.state.display) {
        $('#navbar').css('width', '30%');
      } else {
        $('#navbar').css('width', '0%'); //hide the menu
      }
    } }, { key: 'render', value: function render()


    {
      return (
        React.createElement('div', null,
          React.createElement('i', { id: 'menu', 'class': 'fa fa-bars', 'aria-hidden': 'true', onClick: this.handleClick }),
          React.createElement(Navigation, null),
          React.createElement(MainDoc, null)));


    } }]);return App;}(React.Component);




//render the app-------------------------------------------------
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));



//jQuery for animations_______________________________________________

var section = $('.main-section'), //all sections
nav = $('#navbar'), //navigation bar
navHeight = nav.outerHeight(); //navigation height

//to toggle class activeon scroll(highlight the current section)-------------------
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop(); //current position of scroll


  //to check which section is in view-----------------------------
  section.each(function () {
    var top = $(this).offset().top - 400,
    bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      section.removeClass('active'); // remove previous active section
      //trigger active on current section-------------
      $(this).addClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
  });
});


//enable navigation on click -------------------------
nav.find('a').on('click', function () {
  var $this = $(this),
  id = $this.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - 200 },
  500);

  return false;
});

//-----------------------------------------------------------------------------------------