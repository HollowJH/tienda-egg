class Product {
	constructor(id, title, description, colors, price, stock, images, onsale) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.colors = colors;
		this.price = price;
		this.stock = stock;
		this.images = images;
		this.onsale = onsale;
	}
}

const prod1 = new Product(
	"iPhone 14",
	"iPhone 14",
	"El iPhone 14 Pro te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP. Además, trae la Dynamic Island y una pantalla siempre activa, para que puedas interactuar con tu iPhone de una forma completamente nueva. Y viene con Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando no estás en condiciones de hacerlo.",
	["Azul", "Morado", "Amarillo", "Medianoche", "Starlight", "(PRODUCT)Rojo"],
	1200000,
	865,
	[
		"https://oechsle.vteximg.com.br/arquivos/ids/14533792-1000-1000/image-41269e2a96f444dcbaa418690c5db33a.jpg?v=638280067488930000",
	],
	"50% Off"
);
const prod2 = new Product(
	"Galaxy S24 Plus",
	"Galaxy S24 Plus",
	"El Samsung Galaxy S24 es el modelo más compacto de la familia. Destaca por ser un dispositivo extremadamente manejable y compacto, con una pantalla de 6,2 pulgadas de diagonal y tecnología Dynamic AMOLED 2X capaz de alcanzar los 120 hercios de frecuencia de refresco para ofrecer una experiencia extremadamente fluida en cualquier situación.",
	["Azul Titanium", "Verde Titanium", "Naranja Titanium"],
	1150000,
	5,
	[
		"https://novoxperu.com/cdn/shop/files/2-20240126_174357_0001_05274251-63a0-4f01-801e-7d443812e607.png?v=1709106178",
		"https://images.samsung.com/is/image/samsung/p6pim/ph/feature/164987423/ph-feature-galaxy-s24--539781824?$FB_TYPE_A_MO_JPG$",
	],
	"50% Off"
);
const prod3 = new Product(
	"Kindle Paperwhite",
	"Kindle Paperwhite",
	"Hecha especialmente para leer: tiene una pantalla con diseño frontal a ras y sin reflejo, de 300 ppi, que parece papel real incluso ante luz solar directa.",
	[
		"Beige",
		"Blanco",
		"Rojo",
		"Negro",
		"Naranja",
		"Azul",
		"Verde",
		"Amarillo",
		"Rosa",
	],
	100000,
	158,
	["https://i.postimg.cc/2ymFtsTn/kindle2.jpg"],
	"50% Off"
);
const prod4 = new Product(
	"Pixel 8",
	"Pixel 8",
	"el Google Pixel 8 es el smartphone ideal para los amantes del Android “puro”, más aún con los 7 años de actualizaciones garantizadas que tendrá por parte de la empresa. Este móvil de gama alta obtiene una gran valoración gracias a su pantalla OLED y su módulo dual de cámaras, en que lo único que echan de menos es un teleobjetivo. Los aspectos que han sido peor evaluados son su autonomía y lenta velocidad de carga, pero por lo demás no encuentran muchos puntos en contra.",
	["Avellana", "Obsidiana", "Rosa", "Verde Liquen"],
	1000000,
	7,
	[
		"https://unaluka.com/cdn/shop/files/pixel8negro_1200x1200.jpg?v=1701296785",
	],
	"50% Off"
);
const prod5 = new Product(
	"iPad Pro 12.9",
	"iPad Pro 12.9",
	`El Apple iPad Pro 12.9 (2020) es la que más prestaciones y potencia ofrece hasta el momento, de ahí que su precio suba considerablemente. Aporta todo lo que un usuario profesional espera de este tipo de dispositivos, que se puede utilizar eficazmente en todo tipo de trabajos.

	Su pantalla, cómo no, es un elemento destacado: Liquid Retina de 12,9’’ con tecnología ProMotion y True Tone, de una gran luminosidad (600 cd/m²). La tablet incorpora el último chip A12Z con 8 núcleos y cuenta con 6 GB de RAM.`,
	["Gris Espacial", "Plateado"],
	900000,
	500,
	["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
	"50% Off"
);
const prod6 = new Product(
	"iPad Pro 12.9",
	"iPad Pro 12.9",
	"lorem10",
	["silver"],
	900000,
	150,
	["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
	"50% Off"
);

export const products = [prod1, prod2, prod3, prod4, prod5, prod6];
