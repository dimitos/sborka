$.ajaxSetup({cache: false});

$.fn.padding = function (direction) {
    return parseFloat(this.css("padding-" + direction));
};

$("input[name='phone']").mask("+7(999)999-99-99", {placeholder: "+7(___) --- -- --"}).on("click", function () {
    $(this).focus();
});

(function (w) {
    w.URLSearchParams = w.URLSearchParams || function (searchString) {
        var self = this;
        self.searchString = searchString;
        self.get = function (name) {
            var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(self.searchString);
            if (results == null) {
                return null;
            } else {
                return decodeURI(results[1]) || 0;
            }
        };
        self.has = function (name) {
            var results = new RegExp("[\?&]" + name).exec(self.searchString);
            if (results == null) {
                return null;
            } else {
                return true;
            }
        }
    }
})(window)
