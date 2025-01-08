<template>
  <tn-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <tn-form-item ref="name" label="Activity name" name="name">
      <tn-input v-model:value="formState.name" />
    </tn-form-item>
    <tn-form-item label="Activity zone" name="region">
      <tn-select v-model:value="formState.region" placeholder="please select your zone">
        <tn-select-option value="shanghai">Zone one</tn-select-option>
        <tn-select-option value="beijing">Zone two</tn-select-option>
      </tn-select>
    </tn-form-item>
    <tn-form-item label="Activity time" required name="date1">
      <tn-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </tn-form-item>
    <tn-form-item label="Instant delivery" name="delivery">
      <tn-switch v-model:checked="formState.delivery" />
    </tn-form-item>
    <tn-form-item label="Activity type" name="type">
      <tn-checkbox-group v-model:value="formState.type">
        <tn-checkbox value="1" name="type">Online</tn-checkbox>
        <tn-checkbox value="2" name="type">Promotion</tn-checkbox>
        <tn-checkbox value="3" name="type">Offline</tn-checkbox>
      </tn-checkbox-group>
    </tn-form-item>
    <tn-form-item label="Resources" name="resource">
      <tn-radio-group v-model:value="formState.resource">
        <tn-radio value="1">Sponsor</tn-radio>
        <tn-radio value="2">Venue</tn-radio>
      </tn-radio-group>
    </tn-form-item>
    <tn-form-item label="Activity form" name="desc">
      <tn-textarea v-model:value="formState.desc" />
    </tn-form-item>
    <tn-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <tn-button type="primary" @click="onSubmit">Create</tn-button>
      <tn-button style="margin-left: 10px" @click="resetForm">Reset</tn-button>
    </tn-form-item>
  </tn-form>
</template>
<script setup>
import { reactive, ref, toRaw } from 'vue';
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  name: '',
  region: undefined,
  date1: undefined,
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const rules = {
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'change',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  date1: [
    {
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
      type: 'object',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    {
      required: true,
      message: 'Please input activity form',
      trigger: 'blur',
    },
  ],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch(error => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>