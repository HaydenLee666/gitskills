function Makehightlight(tr) {
    tr.style.backgroundColor = "yellow";
}

function Makedisappear(tr) {
    tr.style.display = "none";
}

function Makeoriginal(tr) {
    tr.style.backgroundColor = "#FAFCFF";
}

function Makeappear(tr) {
    tr.style.display = "";
}
window.onload = function () {
    var AddButton, ResetButton, SearchButton, FilterButton, Cart, Book, SearchInput, Select, Title, Category;
    AddButton = document.getElementById("addButton");
    ResetButton = document.getElementById("resetButton");
    SearchButton = document.getElementById("searchButton");
    FilterButton = document.getElementById("filterButton");
    Cart = document.getElementById("cart");
    Book = document.getElementsByClassName("book");
    Title = document.getElementsByClassName("title");
    Select = document.getElementById("filterInput");
    Category = document.getElementsByClassName("category");
    SearchButton.onclick = function () {
        SearchInput = document.getElementById("searchInput").value;
        var flag = 0;
        for (var i = 0; i < Title.length; i++) {
            if (Title[i].innerHTML.search(SearchInput) != -1) {
                Makehightlight(Book[i]);
                flag = 1;
            }
            else {
                Makeoriginal(Book[i]);
            }
        }
        if (flag == 0) {
            alert("Can not find any related books !");
        }
    };
    FilterButton.onclick = function () {
        var FilterIndex = Select.selectedIndex;
        var FilterInput = Select.options[FilterIndex].text;
        var flag = 0;
        if (FilterIndex == 0) {
            for (var i = 0; i < Category.length; i++) {
                Makeappear(Book[i]);
                flag = 1;
            }
        }
        else {
            for (var i = 0; i < Category.length; i++) {
                if (Category[i].innerHTML != FilterInput) {
                    Makedisappear(Book[i]);
                }
                else {
                    Makeappear(Book[i]);
                    flag = 1;
                }
            }
        }
        if (flag == 0) {
            alert("The category does not contain any books !");
        }
    };
    AddButton.onclick = function () {
        var t, cartContext, CheckBoxList, booknumber;
        cartContext = Cart.innerHTML;
        CheckBoxList = document.getElementById("listBox").getElementsByTagName("input");
        booknumber = 0;
        for (var i = 0; i < CheckBoxList.length; i++) {
            if (CheckBoxList[i].checked == true) booknumber++;
        }
        cartContext = cartContext.slice(1, -1);
        cartContext = parseInt(cartContext) + booknumber;
        cartContext.toString();
        Cart.innerHTML = "(" + cartContext + ")";
    };
    ResetButton.onclick = function () {
        var c = confirm("Do you want to reset the cart?");
        if (c == true) {
            Cart.innerHTML = "(0)";
        }
        else {}
    };
}