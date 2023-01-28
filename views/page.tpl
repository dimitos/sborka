<!DOCTYPE html>
<html class="page page_{$page->name}" lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1">

        {* Title, description, etc *}
        {include "common/page/head/seo.tpl"}

        {* Загрузка шрифтов *}
        {include "common/page/head/loadfonts.tpl"}

        {* Фавиконки *}
        {include "common/page/head/favicons.tpl"}

        {* Микроразметка Open Graph *}
        {include "common/page/head/open-graph.tpl"}

        {* Микроразметка Schema.org *}
        {include "common/page/head/schema.tpl"}

        {* Стили, общие для всех страниц *}
        {$common_styles}

        {* Стили текущей страницы *}
        {if !empty($page->styles)}
            {$page->styles}
        {/if}

        {* Критические скрипты *}
        {$inline_scripts}

    </head>

    {$id_complex = "01"}  {* определить id-complex для загрузки контента страницы *}
    <body class="page__body page__body_{$page->name}" {if $page->name == "complex" && $id_complex != ""}data-id-complex="{$id_complex}"{/if}>
        <script>checkWebpSupport();</script>

        {* Основной заголовок страницы *}
        <h1 class="page__h1 visually-hidden">{$meta->h1}</h1>

        {* Шапка страницы *}
        {if ( $page->name != '404' ) }
            {include "common/components/header.tpl" class= "page__header page__header_{$page->name}"}
        {/if}

        {* Меню страницы *}
        {if ( $page->name != '404' ) }
            {include "common/components/menu.tpl"}
        {/if}

        {* Основной контент страницы *}
        <main class="{$page->name} page__main page__main_{$page->name}">
            {block main}{/block}
        </main>

        {* Футер страницы *}
        {if ( $page->name != '404' ) }
            {include "common/components/footer.tpl" footer=[
                "class" => "page__footer page__footer_{$page->name}"
            ]}
        {/if}

        {* Модалки *}
        <div class="intopModal__wrap">
            {include "common/page/modals/thanks.tpl" eng="thanks"}
            {include "common/page/modals/callback.tpl" eng="callback"}
        </div>

        {* Вендорные скрипты *}
        {$vendor_scripts}

        {* Скрипты, общие для всех страниц *}
        {$common_scripts}

        {* Скрипты текущей страницы *}
        {if !empty($page->scripts)}
            {$page->scripts}
        {/if}

    </body>
</html>
