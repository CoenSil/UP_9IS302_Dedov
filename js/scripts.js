var IMG = { p1: "../images/p1.jpg", p2: "../images/p2.jpg", p3: "../images/p3.jpg", p4: "../images/p4.jpg", p5: "../images/p5.jpg", p6: "../images/p6.jpg", p7: "../images/p7.jpg", p8: "../images/p8.jpg", p9: "../images/p9.jpg", a1: "../images/a1.jpg", a2: "../images/a2.jpg", a3: "../images/a3.jpg", a4: "../images/a4.jpg" };
var works = [
    ["Портрет", "Студийный портрет", "Мягкий свет, ретушь", "p1"],
    ["Портрет", "Деловой портрет", "Для сайта и визитки", "p2"],
    ["Портрет", "Портрет для соцсетей", "Естественный свет", "p3"],
    ["Портрет", "Чёрно-белый портрет", "Тонировка и контраст", "p4"],
    ["Документы", "Фото на паспорт", "Готово за 10 минут", "p5"],
    ["Документы", "Фото на визу", "Требования консульств", "p6"],
    ["Печать", "Портрет на холсте 30×40", "Подрамник в комплекте", "p7"],
    ["Печать", "Фотокнига 20×20", "Обложка с портретом", "p8"],
    ["Полиграфия", "Визитки с фото", "Тираж от 50 шт.", "p9"]];
var cats = ["Все"].concat(works.map(function (w) { return w[0] }).filter(function (v, i, a) { return a.indexOf(v) === i }));
var F = document.getElementById("filters"), G = document.getElementById("gallery");
works.forEach(function (w) {
    var f = document.createElement("figure"); f.className = "work"; f.dataset.cat = w[0];
    f.innerHTML = '<div class="ph"><img src="' + IMG[w[3]] + '" alt="' + w[1] + '" loading="lazy"><span>' + w[0] + '</span></div><figcaption>' + w[1] + '<small>' + w[2] + '</small></figcaption>'; G.appendChild(f)
});
["p1", "p2", "p4", "p3", "p7", "p8"].forEach(function (k) { var d = document.createElement("div"); d.innerHTML = '<img src="' + IMG[k] + '" alt="">'; document.getElementById("strip").appendChild(d) });
cats.forEach(function (c, i) {
    var b = document.createElement("button"); b.className = "chip"; b.type = "button"; b.textContent = c; b.setAttribute("aria-pressed", i == 0);
    b.onclick = function () {
        [].forEach.call(F.children, function (x) { x.setAttribute("aria-pressed", x === b) });
        [].forEach.call(G.children, function (g) { g.hidden = !(c == "Все" || g.dataset.cat == c) })
    }; F.appendChild(b)
});

var tips = {
    "Портрет": ["Выспитесь и выпейте воды: лицо выглядит свежее.", "Берите 2–3 образа однотонной одежды без крупных логотипов.", "Мужчинам лучше побриться за день до съёмки, а не в день съёмки.", "Приходите за 10 минут до начала, чтобы привыкнуть к студии."],
    "Семья": ["Договоритесь об общей цветовой гамме одежды: два-три сочетающихся тона.", "Покормите детей перед съёмкой и возьмите любимую игрушку.", "Выбирайте удобную одежду, в которой можно двигаться.", "Не торопите детей: лучшие кадры получаются в игре."],
    "Документы": ["Возьмите с собой старый документ или требования учреждения.", "Уберите волосы с лица и откажитесь от очков с бликами.", "Выбирайте одежду, которая контрастирует со светлым фоном.", "Для детей до 3 лет приходите после сна."]
};
var T = document.getElementById("tabs"), B = document.getElementById("tipbox");
Object.keys(tips).forEach(function (k, i) {
    var b = document.createElement("button"); b.type = "button"; b.role = "tab"; b.textContent = k; b.setAttribute("aria-selected", i == 0);
    var p = document.createElement("div"); p.className = "tips" + (i == 0 ? " on" : ""); p.innerHTML = "<ul>" + tips[k].map(function (t) { return "<li>" + t + "</li>" }).join("") + "</ul>";
    b.onclick = function () { [].forEach.call(T.children, function (x) { x.setAttribute("aria-selected", x === b) });[].forEach.call(B.children, function (x) { x.classList.toggle("on", x === p) }) }; T.appendChild(b); B.appendChild(p)
});

[["Марина К.", "Портретная съёмка", "Фотограф быстро нашёл подход, а снимки получили на следующий день. Ретушь аккуратная, лицо осталось естественным.", 5, "a1"],
["Игорь П.", "Фото на визу", "Сделали за 10 минут, всё по требованиям консульства. Приняли с первого раза.", 5, "a2"],
["Ольга С.", "Фотокнига", "Книга получилась плотная и аккуратная, цвета совпали с оригиналом. Менеджер помог с версткой.", 4, "a3"],
["Артём Л.", "Печать визиток", "Тираж готов за день, качество бумаги хорошее. Пригодились советы по макету.", 5, "a4"]].forEach(function (r) {
    var d = document.createElement("div"); d.className = "rev"; d.innerHTML = '<div class="stars" aria-label="Оценка ' + r[3] + ' из 5">' + "★".repeat(r[3]) + "☆".repeat(5 - r[3]) + '</div><p>' + r[2] + '</p><div class="who"><img src="' + IMG[r[4]] + '" alt=""><div><b>' + r[0] + '</b><span>' + r[1] + '</span></div></div>'; document.getElementById("revs").appendChild(d)
});

var S = [["Фотосъёмка в студии (час)", 2500], ["Фото на документы (комплект)", 350], ["Печать фото 10×15 (шт.)", 25], ["Печать на холсте 30×40 (шт.)", 1900], ["Фотокнига 20×20 (шт.)", 2800], ["Ксерокопия А4 (шт.)", 8], ["Брошюровка и переплёт (шт.)", 150]];
var sel = document.getElementById("service"), qty = document.getElementById("qty"), dl = document.getElementById("deliv"), tot = document.getElementById("total");
S.forEach(function (s, i) { var o = document.createElement("option"); o.value = i; o.textContent = s[0] + " — " + s[1] + " ₽"; sel.appendChild(o) });
function calc() { var q = Math.max(1, parseInt(qty.value) || 1); var t = S[sel.value][1] * q + (+dl.value); tot.textContent = t.toLocaleString("ru-RU") + " ₽"; return t }
[sel, qty, dl].forEach(function (e) { e.addEventListener("input", calc) }); calc();
document.getElementById("date").min = new Date().toISOString().slice(0, 10);
function setErr(id, m) { var e = document.querySelector('[data-for="' + id + '"]'); e.textContent = m; document.getElementById(id).setAttribute("aria-invalid", !!m); return !m }
document.getElementById("orderForm").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var n = document.getElementById("name").value.trim(), p = document.getElementById("phone").value.replace(/\D/g, ""), q = +qty.value;
    var a = setErr("name", n.length < 2 ? "Введите имя" : ""), b = setErr("phone", p.length < 10 ? "Введите телефон полностью, не менее 10 цифр" : ""), c = setErr("qty", (q < 1 || q > 500) ? "Укажите число от 1 до 500" : "");
    if (!(a && b && c)) { return }
    var ok = document.getElementById("ok"); ok.className = "ok on";
    ok.textContent = "Заказ принят, " + n + ". Услуга: " + S[sel.value][0] + ", количество: " + q + ", сумма: " + tot.textContent + ". Мы перезвоним, чтобы подтвердить детали."; ok.scrollIntoView({ block: "nearest" }); this.reset(); calc()
});