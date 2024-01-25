<template>
    <div class="fixed top-0 right-0 left-0 h-screen flex justify-center items-center">
        <div class="relative flex bg-white p-10 rounded-md">
            <button type="button" @click="closeModal"
                class="absolute top-2 right-2 rounded-full bg-red-600 text-white leading-6 text-md w-6 h-6">
                &times;
            </button>
            <div>
                <h2>{{ country.name.official }}</h2>
                <p>
                    <strong>Capital:</strong> {{ country.capital }}
                </p>
                <p>
                    <strong>Population:</strong> {{ country.population }}
                </p>
                <p>
                    <strong>Region:</strong> {{ country.region }}
                </p>
                <p>
                    <strong>Subregion:</strong> {{ country.subregion }}
                </p>
                <p>
                    <!-- <strong>Languages:</strong> {{ country.languages.join(', ') }} -->
                </p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['country']);
const emits = defineEmits(['closeModal']);

const closeModal = () => {
    emits('closeModal');
};
</script>
  