# Handsontable filter

This is a very basic Handsontable plugin that aims to add filter fields at the top of a handson table and expose this data through an event to be consumed by custom code

- - -

### Quick start

1. Download the latest zip from [github](https://github.com/handsontable.filter/handsontable.filter/archive/master.zip):


2. After Handsontable filter is downloaded, include the code into your project. The file you need is inside `src` folder. You can either use the `handsontable.filter.js` or the minified version `handsontable.filter.min.js`:

  ```html
  <script src="src/handsontable.filter.min.js"></script>
  ```

3. After you have created a Handsontable, you need to create a HansontableFilter object and pass it the div's id of the table, and function that will return the filter's value. In addition you will need to bind some kind of event that will fire up the filter (in this case, a button):

  ```html
 <script>
        window.addEventListener("load", function() {
            var hot = new Handsontable(document.getElementById('hansontable'), {
                data: [
                    ["2014", 10, 11, 12, 13, 14, 15, 16],
                    ["2015", 10, 11, 12, 13, 14, 15, 16]
                ],
                rowHeaders: true,
                colHeaders: true
            });

            var hotf = new HandsontableFilter("handsontable", function(arr) {
                console.log(arr);
            }, true);

            document.getElementById("filter.button").addEventListener("click", function() {
                hotf.filter();
            });
        });
    </script>
  ```

Check the examples in the source code for more details.

### Compatibility

Handsontable is compatible with IE 9+, Firefox, Chrome, Safari and Opera.

### License

The Apache License version 2 (see the [LICENSE](http://www.apache.org/licenses/LICENSE-2.0) for the full text)

