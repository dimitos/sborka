{extends "./modal.tpl"}

{block modal}
    <div class="m-callback">
        <div class="m-callback__wrap">
            <div class="m-callback__left g-lazy-img">
                <picture>
                    <source srcset="#" data-src="/img/images/image_045@2x.webp" type="image/webp">
                    <img class="image m-callback__image"
                        src="#"
                        data-src="/img/images/image_045@2x.jpg"
                        alt="Оставить заявку"
                        width="306"
                        height="600">
                </picture>
            </div>
            <div class="m-callback__right">
                <h3 class="m-callback__title">Оставить заявку</h3>
                <p class="m-callback__text">Оставьте ваши контактные данные, и&nbsp;наш специалист свяжется с&nbsp;вами, ответит на&nbsp;все вопросы</p>
                {include "views/common/components/form.tpl"
                    formClass="m-callback__form"
                    formName="Ваше имя"
                    formPhone="Номер телефона"
                    formPrivacy="true"
                    formBtnClass="btn-green-white-green"
                    formBtnText="Оставить заявку"}
            </div>
        </div>
    </div>
{/block}
