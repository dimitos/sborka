<ul class="breadcrumbs scroll-x">
    <li class="breadcrumbs__item"><a class="link breadcrumbs__link" href="/">Главная </a></li>
    {if !empty($breadcrumbs.lavel_3_name)}
        <li class="breadcrumbs__item"><a class="link breadcrumbs__link" href="{$breadcrumbs.lavel_2_link}">{$breadcrumbs.lavel_2_name}</a></li>
        <li class="breadcrumbs__item"><a class="link breadcrumbs__link" href="{$breadcrumbs.lavel_3_link}">{$breadcrumbs.lavel_3_name}</a></li>
        <li class="breadcrumbs__item"><p class="breadcrumbs__text">{$breadcrumbs.name}</p></li>
    {else if !empty($breadcrumbs.lavel_2_name)}
        <li class="breadcrumbs__item"><a class="link breadcrumbs__link" href="{$breadcrumbs.lavel_2_link}">{$breadcrumbs.lavel_2_name}</a></li>
        <li class="breadcrumbs__item"><p class="breadcrumbs__text">{$breadcrumbs.name}</p></li>
    {else }
        <li class="breadcrumbs__item"><p class="breadcrumbs__text">{$breadcrumbs.name}</p></li>
    {/if}
</ul>
