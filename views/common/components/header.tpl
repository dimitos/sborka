<header class="header {$class}">
    <div class="header-desc lock-padding">
        <div class="container container-84">
            <div class="header-wrap">
                <a href="/" class="logo header__logo header__logo_white">
                    <img class="header__logo-icon" src="/img/svg/logo-white.svg" alt="Логотип Строительной компании «Гарантия»">
                </a>
                <a href="/" class="logo header__logo header__logo_black">
                    <img class="header__logo-icon" src="/img/svg/logo-black.svg" alt="Логотип Строительной компании «Гарантия»">
                </a>
                <a class="header__phone" href="tel:+78007009093">8 (800) 700-90-93</a>
            </div>
        </div>
    </div>
    <div class="header-mob">
        <div class="header-mob__wrap">
            <div class="header-mob__item header-mob__closer">
                <div class="header-mob__link">
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "header-mob__icon header-mob__icon-burger", "name" => "burger"]}
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "header-mob__icon header-mob__icon-closer", "name" => "closer"]}
                </div>
            </div>
            <div class="header-mob__line"></div>
            <div class="header-mob__item header-mob__select">
                <div class="header-mob__link">
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "header-mob__icon", "name" => "select"]}
                </div>
            </div>
            <div class="header-mob__line"></div>
            <a href="/" class="logo header-mob__item header-mob__logo">
                <img class="header-mob__logo-icon" src="/img/svg/logo-white.svg" alt="Логотип Строительной компании «Гарантия»">
            </a>
            <div class="header-mob__favorites favorites-true"> {* если есть избранные квартиры, то добавляется селектор favorites-true *}
                <div class="header-mob__link">
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "header-mob__icon", "name" => "favorites"]}
                </div>
            </div>
            <div class="header-mob__line"></div>
            <div class="header-mob__item header-mob__user">
                <div class="header-mob__link">
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "header-mob__icon", "name" => "user"]}
                </div>
            </div>
            <div class="header-mob__item header-mob__phone">
                <a class="header-mob__link" href="tel:+78007009093">
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "header-mob__icon", "name" => "phone"]}
                </a>
            </div>
        </div>
    </div>
</header>

