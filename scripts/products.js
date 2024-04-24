class Product {
	constructor(id, title, price, stock, images, onsale, supplier) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.stock = stock;
		this.images = images;
		this.onsale = onsale;
		this._supplier = supplier;
	}
}

const prod1 = new Product(
	"iPhone 14",
	"iPhone 14",
	1200000,
	865,
	["https://imgs.search.brave.com/k-uEN6chaHtn3W4IeNhxZML2Z4hC0OXjmgKJCl2TAPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxY3d5d0xaUi1M/LmpwZw"],
	"50% Off",
	"apple"
);
const prod2 = new Product(
	"Galaxy S24 Plus",
	"Galaxy S24 Plus",
	1150000,
	5,
	["https://imgs.search.brave.com/tdyJB63-rEq311Cf7YbxWywNh2MbzE2cQfUBy8xduWc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Ftc3VuZ21vYmls/ZXByZXNzLmNvbS9m/aWxlLzJCNDlERTNB/RjZEQzVDMzg1REM4/OEIxMEI0RDdGQUIy/Q0IxRTI1N0M1RTE4/RjZEODJCNUQyODc1/NkE1RDU5RTgwNkM2/MjBGMzZBQjUzOEEx/RTYzMzlGNEEzNzhD/QTc4ODU5MTc1NzRF/MUREMEYxOTAwOTEz/MEE3MkYwNzQ2MzMw/QTE0QkE4NDg3M0Qw/NDJDOTAyNjIzMjU5/MDM5MDU3NEY0OUI2/QjBCQTBERkY5NDBB/OUE1NUM4MEYyNUJD/MzgyQTc2RTBEODU3/NjVENENBQ0FBNzUy/RDk3RUU4QTY1MzlB/NTIwMDc5MUI5MjA4/RjZDOEUxRUNBMjky/RkZBNTc3MDY"],
	"50% Off",
	"samsung"
);
const prod3 = new Product(
	"Kindle Paperwhite",
	"Kindle Paperwhite",
	100000,
	158,
	["https://i.postimg.cc/2ymFtsTn/kindle2.jpg"],
	"50% Off",
	"amazon basics"
);
const prod4 = new Product(
	"Pixel 8",
	"Pixel 8",
	1000000,
	7,
	["https://imgs.search.brave.com/UoObNGSNdanAzWKTvEJ8oTlCFbZQUabjgMvGlaSBSfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2d3ZWIt/dW5pYmxvZy1wdWJs/aXNoLXByb2QvaW1h/Z2VzL1BpeGVsXzhf/aW5fSGF6ZWwubWF4/LTkzNng5MzYuZm9y/bWF0LXdlYnAud2Vi/cA"],
	"50% Off",
	"Google"
);
const prod5 = new Product(
	"iPad Pro 12.9",
	"iPad Pro 12.9",
	900000,
	500,
	["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
	"50% Off",
	"apple"
);
const prod6 = new Product(
	"iPad Pro 12.9",
	"iPad Pro 12.9",
	900000,
	150,
	["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
	"50% Off",
	"apple"
);

export const products = [prod1, prod2, prod3, prod4, prod5, prod6];
