<script>
  import {
    Column,
    RadioButton,
    RadioButtonGroup,
    Row,
    Select,
    SelectItem,
    SelectSkeleton,
  } from 'carbon-components-svelte';
  import { t } from '../i18n.js';
  import { getDaysRange, getMonthsAsArray, getYears, isLeapYear } from './utils.js';

  let hexaIndex = '16';
  let displayYears = true;

  const years = getYears();
  let selectedYear = years[0];

  let months = [];
  let selectedMonth = null;

  let days = [];
  let selectedDay = null;

  let hasSelectedYear = false;
  let hasSelectedMonth = false;

  const selectYear = () => {
    hasSelectedYear = true;
    months = getMonthsAsArray(Number(years[selectedYear].text));
  };

  const selectMonth = () => {
    hasSelectedMonth = true;
    days = getDaysRange(months[selectedMonth].id, isLeapYear(Number(years[selectedYear].text))) ?? [];
  };

  const selectDay = () => {
  };

  const hexaParse = (str) => {
    return Number(str).toString(Number(hexaIndex));
  };

  const updateDisplay = () => {
    displayYears = false;
    setTimeout(() => {
      displayYears = true;
    }, 500);
  }
</script>

<Column>
    <Row>
        <RadioButtonGroup labelPosition="left" bind:selected={hexaIndex} on:click={updateDisplay}>
            <RadioButton labelText="Peut-être" value="2"></RadioButton>
            <RadioButton labelText="Oui" value="16"></RadioButton>
            <RadioButton labelText="Non" value="10"></RadioButton>
        </RadioButtonGroup>
    </Row>

    <Row>
        <Column>
            {#if displayYears}
                <Select type="inline" labelText={ $t("form.labels.year") } bind:selected={selectedYear}
                        on:change={selectYear}>
                    {#each years as year}
                        <SelectItem value={year.id} text={hexaParse(year.text)}></SelectItem>
                    {/each}
                </Select>
            {:else}
                <SelectSkeleton inline></SelectSkeleton>
            {/if}
        </Column>

        <Column>
            {#if months.length}
                <Select type="inline" labelText={ $t("form.labels.month") } bind:selected={selectedMonth}
                        on:change={selectMonth}>
                    {#each months as month}
                        <SelectItem value={month.id} text={$t(month.text)}></SelectItem>
                    {/each}
                </Select>
            {:else}
                <SelectSkeleton inline></SelectSkeleton>
            {/if}
        </Column>

        <Column>
            {#if days.length}
                <Select type="inline" labelText={ $t("form.labels.day") } bind:selected={selectedDay}
                        on:change={selectDay}>
                    {#each days as day}
                        <SelectItem value={day.id} text={hexaParse(day.text)}></SelectItem>
                    {/each}
                </Select>
            {:else}
                <SelectSkeleton inline></SelectSkeleton>
            {/if}
        </Column>
    </Row>
</Column>


<style lang="scss"></style>
