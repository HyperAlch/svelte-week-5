<script>
	import ContactCard from './ContactCard.svelte';
</script>
<!-- 
    If you need more than one slot in a single component, named slots are a good option
 -->
<ContactCard>
    <!--
        The slot associated with the identifier is replaced directly 
        with the element that slot is attached too.
    
        Example: 
        <h2>
            <slot name="fullname">
                <span class="missing">Unknown name</span>
            </slot>
	    </h2>

        Turns into:
        <h2>
            <span>
                P. Sherman
            </span>
	    </h2>

        When rendering the slot below 
    -->

	<span slot="fullname">
		P. Sherman
	</span>

	<span slot="address">
		42 Wallaby Way<br>
		Sydney
	</span>
</ContactCard>