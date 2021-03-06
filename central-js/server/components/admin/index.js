var NodeCache = require("node-cache" );
//var uuid = require("uuid");
var crypto = require('crypto');

var adminKeysCache = new NodeCache();
var cacheKey = 'admin-keys-map';
// ��� �������
var aAdminInn = [
	'3119325858'
	,'2943209693' //Белявцев
	,'3167410996' //Забрудский
        ,'2817305057' //Свидрань
        ,'3075311805' //Грек
        ,'3314612661' //Войт
        ,'2268819154' //Братусь Михаил Владимирович оператор ФО
        ,'1806101517' //Конных Юрий Николаевич оператор ФО
        ,'2007813996' //Шипов Александр Юрьевич оператор ФО
        ,'2181117011' //Тарасенко Александр Иванович оператор ФО
        ,'2451100643' //Дручкова Жанна Іванівна оператор ФО
        ,'2955913663' //Рыбкина Екатерина Николаевна Колл-центр
        ,'3273602580' //Фещенко Юлия Витальевна Колл-центр
        ,'3364507588' //Сторож Алена Александровна Колл-центр
        ,'3017805029' //Аскерова Аида Александровна Колл-центр
        ,'3410000000' //Проскурова Олеся Олеговна Колл-центр-удален
        ,'3375301375' //Чепурко Сергей Сергеевич Колл-центр
        ,'3453103770' //Кордин Виталий Юрьевич Колл-центр
        ,'3360509887' //Фалько Елена Николаевна Колл-центр
        ,'3364309262' //Юрченко Елизавета Юрьевна Колл-центр
        ,'3218506761' //Моисеева Галина Викторовна Колл-центр
        ,'3335600202' //Кулинич Ольга Григорівна Колл-центр
        ,'3356809424' //Соколова Дарья Андреевна Колл-центр
        ,'3384604904' //Левченко Юлия Вадимовна Колл-центр
        ,'3507906677' //Гавриш Олег Анатольевич Колл-центр
        ,'3318701324' //ФО Малолетнева Ульяна Евгеньевна
        ,'2819413260' //ФО Алексеенкова Анастасия Владимировна
        ,'3432314483' //БА Федько Анастасия Сергеевна оператор БО
        ,'3100218921' //БА Магоня Ирина Александровна оператор БО
        ,'3007605949' //БА Зимовец Полина Владимировна оператор БО
        ,'3118718406' //БА Салимова Лейли Александровна оператор БО
        ,'3347002733' //БА Божко Владимир Сергеевич супервизор
        ,'3233100559' //Горбань
        ,'3274107439' //Реутов Сергій Валерійович Загран КрРог
        ,'2490717289' //Бурлака Валентина Вячеславівна Загран КрРог
        ,'2701508303' //Бура Ганна Вячеславівна Загран КрРог
        ,'3227221389' //Легкошерст Ю.С. Загран КрРог
        ,'2745115749' //Людмила Довгинцівський РВ Загран КрРог
        ,'3354912955' //Дмитро Олегович Загран Кременець
        ,'3145719001' //Шмига Тетяна Віталіївна Загран Кременець
        ,'3298407213' //Невстокай Олександр Сергійович оператор БО
        ,'2506700205' //Соколова Ирина Георгиевна оператор БО
        ,'3303004002' //Мельничук Анжелика Игоревна оператор БО		
	,'3481800056' //Бобровский Владислав колл-центр
        ,'3504302600' //Леник Елена Сергеевна колл-центр
        ,'3464108342' //Грицышина Полина колл-центр
        ,'3481807493' //Сидак Александр Анатольевич колл-центр
        ,'3563404507' //Гудым Диана Валентиновна колл-центр
        ,'3265000205' //Барабаш Анастасия Олеговна колл-центр
        ,'3331201403' //Гуменюк Елена Сергеевна колл-центр
        ,'3294710102' //Швайко Ольга Владимировна колл-центр
        ,'3382603546' //Самойленко Мария Леонидовна колл-центр
        ,'3522713605' //Жижко Виктория Алексеевна колл-центр
        ,'3388204673' //Симагин Сергей Александрович колл-центр
        ,'3571703632' //Замковой Владислав Евгеньевич колл-центр
        ,'3253714017' //Дубровец Дмитрий Владимирович колл-центр
        ,'3000122081' //Мороз Яна Анатольевна колл-центр
        ,'3489209489' //Третьяк Екатерина колл-центр
        ,'3480908903' //Черная Светлана колл-центр
        ,'3486803312' //Споденец Дмитрий колл-центр
        ,'3324008718' //Кравчук Алексей колл-центр
        ,'3453807654' //Ставрат Станислав колл-центр
        ,'3413409424' //Гуляк Анастасия колл-центр
	,'3413908282' //Онбыш Екатерина Николаевна колл-центр
	,'3320409672' //Саенко Ярослав Викторович колл-центр
	,'3304212174' //Билецкий Сергей Андреевич колл-центр
	,'3131622274' //Пиво Александр Владимирович колл-центр
	,'3268819042' //Зеленская Яна Сергеевна колл-центр
	,'3323603751' //Высоцкий Владимир Михайлович колл-центр
	,'3563605200' //Белая Юлия Александровна колл-центр
	,'3437204655' //Аракелян Николай Эдуардович колл-центр
	,'3385106334' //Майор Сергей Владимирович колл-центр
	,'3564907207' //Антипова Ирина Владимировна колл-центр
	,'3404814782' //Белик Яна Александровна колл-центр
	,'3462506026' //Шейко Юлия Сергеевна колл-центр
	,'3331704672' //
        ,'3340312504' //Романькова Юлия Валериевна оператор ФО
        ,'3199006657' //Горб Игорь Валентинович оператор ФО
        ,'3139206241' //Голубь Ольга Вячеславовна оператор ФО
        ,'2794700544' //Момот Ольга Вячеславовна оператор ФО
        ,'3318210825' //Донець Олена Миколаївна оператор ФО
        ,'2947005183' //Гапоненко Ольга Вікторовна оператор ФО
        ,'3459105503' //Кабанова Юлиана Юрьевна колл-центр
        ,'3525502777' //Горбов Станислав Витальевич колл-центр
        ,'3514003065' //Ковальчук Анастасiя Олександрiвна колл-центр
        ,'3456105907' //Бокарева Анастасия Геннадьевна колл-центр
        ,'3270407642' //Тетянчук Алина Сергеевна колл-центр
        ,'3428100125' //Турковец Лидия Юрьевна колл-центр
        ,'3002518216' //Вовк Евгений Викторович колл-центр
        ,'3385507197' //Воронiн Олег Юрiйович колл-центр
        ,'3358515670' //Бруяка Андрей Николаевич колл-центр
        ,'2622113164' //Мина Наталья Германовна колл-центр
        ,'3377510065' //Солнцева Анна Николаевна колл-центр
        ,'3156100721' //Романова Татьяна Ивановна колл-центр
        ,'3338000515' //Сычев Андрей колл-центр
        ,'3440714805' //София Данилевич БА Тернополь
        ,'3221220890' //Яковлев Максим загран КрРог
];

var getAdminKeys = function () {
	var result = adminKeysCache.get(cacheKey);
	if (!result) {
		result = {};
		setAdminKeys(result);
	}
	return result;
};

var setAdminKeys = function (value) {
	adminKeysCache.set(cacheKey, value);
};

var generateAdminToken = function (inn) {
	var unhashed = inn + (new Date()).toString();
	var result = crypto.createHash('sha1').update(unhashed).digest('hex'); //uuid.v1();
	var keys = getAdminKeys();
	keys[inn] = result;
	setAdminKeys(keys);
	return result;
};

var isAdminInn = function(inn) {
	return aAdminInn.indexOf(inn) > -1;
};

var Admin = function() {

};

Admin.generateAdminToken = generateAdminToken;
Admin.isAdminInn = isAdminInn;

module.exports = Admin;
