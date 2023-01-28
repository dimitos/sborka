<svg class="icon {$icon.class}" {if !empty($icon.attributes)}
    {foreach $icon.attributes as $attribute_name => $attribute_value}
        {if gettype($attribute_value) === "boolean"}
            {if $attribute_value === true}
                {$attribute_name}
            {/if}
        {else}
            {$attribute_name}="{$attribute_value}"
        {/if}
    {/foreach}
{/if}>
    <use xlink:href="/img/svg/{$icon.file}.svg#{$icon.name}"></use>
</svg>
