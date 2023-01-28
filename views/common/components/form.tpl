<form class="form {$formClass}">
    <div class="input__fields">
        {if $formCompany }
            <div class="input__fields-item">
                <label class="input__field input__field-company">
                    <input class="input input-default input-company" type="text" placeholder="{$formCompany}">
                </label>
            </div>
        {/if}
        {if $formFile }
            <div class="input__fields-item input-file__fields-item">
                <label class="input__file-label">
                    <span>{$formFile}</span>
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "file-add__icon icon", "name" => "file-add"]}
                    {include "common/components/icon.tpl" icon=["file" => "icons", "class" => "file-plus__icon icon", "name" => "file-plus"]}
                    <input class="input__file" type="file" name="file" multiple="">
                </label>
                <div class="input__file-list">
                    {* место для вставки имен выбранных для загрузки файлов в tenders.js *}
                </div>
            </div>
        {/if}
        {if $formName }
            <div class="input__fields-item">
                <label class="input__field input__field-name">
                    <input class="input input-default input-name" type="text" placeholder="{$formName}">
                </label>
            </div>
        {/if}
        {if $formPhone }
            <div class="input__fields-item">
                <label class="input__field input__field-phone">
                    <input class="input input-default input-phone" type="tel" name="phone" placeholder="{$formPhone}">
                </label>
            </div>
        {/if}
        {if $formEmail }
            <div class="input__fields-item">
                <label class="input__field input__field-email">
                    <input class="input input-default input-email" type="text" name="email" placeholder="{$formEmail}">
                </label>
            </div>
        {/if}
        {if $formPass }
            <div class="input__fields-item">
                <label class="input__field input__field-pass">
                    <input class="input input-default input-pass" type="password" name="password" placeholder="{$formPass}">
                </label>
            </div>
        {/if}
        {if $formComment }
            <div class="input__fields-item">
                <label class="input__field input__field-comment">
                    <textarea class="input input-default input-comment" name="text" placeholder="{$formComment}"></textarea>
                </label>
            </div>
        {/if}
    </div>
    {if $formPrivacy}
        <div class="input__check">
            <label class="input__privacy">
                <input class="input__checkbox input__checkbox-privacy" type="checkbox" checked>
                <span class="input__agreement"></span>
                <span class="input__check-text">Согласие на обработку персональных данных</span>
            </label>
            {* <div class="input__check-text">Согласие на обработку персональных данных</div> *}
        </div>
    {/if}
    {if $formRemember}
        <div class="input__check">
            <label class="input__remember">
                <input class="input__checkbox input__checkbox-remember" type="checkbox">
                <span class="input__agreement"></span>
            </label>
            <button class="input__check-text" type="button">Запомнить</button>
        </div>
    {/if}
    {if $formBtnClass}
        <button class="btn btn-default {$formBtnClass} form-btn" type="button">{$formBtnText}</button>
    {/if}
    <input type="hidden" class="input__from" value="Всплывающее окно">
</form>
