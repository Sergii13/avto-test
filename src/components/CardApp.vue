<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Thumbs } from 'swiper/modules'
import 'swiper/css'
import LinkIcon from '@/components/icons/LinkIcon.vue'
import FavoriteIcon from '@/components/icons/FavoriteIcon.vue'
import SlideImg from '@//assets/images/01.jpg'
import CheckImg from '@//assets/images/icon-check.svg'
import LogoImg from '@//assets/images/logo.svg'
import YoutubeIcon from '@//assets/images/bi_youtube.svg'
import InfoIcon1 from '@/assets/images/icons/01.svg'
import InfoIcon2 from '@/assets/images/icons/02.svg'
import InfoIcon3 from '@/assets/images/icons/03.svg'
import InfoIcon4 from '@/assets/images/icons/04.svg'
import InfoIcon5 from '@/assets/images/icons/05.svg'
import InfoIcon6 from '@/assets/images/icons/06.svg'
import InfoIcon7 from '@/assets/images/icons/07.svg'
import InfoIcon8 from '@/assets/images/icons/08.svg'
import PhoneIcon from '@/assets/images/phone.svg'
import CountryIcon from '@/assets/images/country.svg'
import TradeIcon from '@/assets/images/trade.svg'
import TestIcon from '@/assets/images/avto.svg'
import ArrowIcon from '@/assets/images/arrow.svg'
import { computed, ref } from 'vue'
import { VRadioGroup, VRadio } from 'vuetify/components'

const mainSwiper = ref(null)

function setMainSwiper(swiper) {
  mainSwiper.value = swiper
}

const countAllSlides = computed(() => {
  if (!mainSwiper.value) {
    return 0
  }
  return mainSwiper.value.slides.length

})


const activeSlideIndex = ref(1)

function changeSlideIndex() {
  activeSlideIndex.value = mainSwiper.value.activeIndex + 1
}


const thumbsSwiper = ref(null)

function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}


const currencyOptions = ref([
  {
    value: 'uah',
    label: 'Грн'
  },
  {
    value: 'usd',
    label: 'Usd'
  },
  {
    value: 'eur',
    label: 'Eur'
  },
  {
    value: 'crypto',
    label: 'Crypto'
  }
])
const selectedCurrency = ref(currencyOptions.value[0].value)

const currentCurrencyLabel = computed(() => {
  return currencyOptions.value.find(item => item.value === selectedCurrency.value).label
})

const visibleNumber = ref(false)

function toggleVisibleNumber() {
  visibleNumber.value = !visibleNumber.value
}

const openMore = ref(false)

function toggleMore() {
  openMore.value = !openMore.value
}
</script>

<template>
  <div class="card">
    <div class="card__row">
      <div class="card__left">
        <div class="card__slider-main">
          <div class="card__slider-row">
            <div class="card__slider-logo">
              <div class="card__slider-logo-check">
                <img :src="CheckImg" alt="">
              </div>
              <div class="card__slider-logo-main">
                <img :src="LogoImg" alt="">
              </div>
            </div>
            <div class="card__slider-actions">
              <div class="card__slider-count">{{ activeSlideIndex }} из {{ countAllSlides }}</div>
              <a href="" class="card__slider-youtube">
                <img :src="YoutubeIcon" alt="">
              </a>
            </div>
          </div>
          <swiper
            :modules="[Thumbs,Pagination]"
            :thumbs="{ swiper: thumbsSwiper }"
            :slides-per-view="1"
            :space-between="50"
            @slide-change="changeSlideIndex"
            :pagination="{
               dynamicBullets: true,
               clickable:true
             }"
            @swiper="setMainSwiper"
          >
            <swiper-slide v-for="index of 20" :key="index">
              <div class="card__big-image">
                <img :src="SlideImg" alt="">
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <swiper
          :modules="[Thumbs]"
          watch-slides-progress
          @swiper="setThumbsSwiper"
          slides-per-view="auto"
          space-between="12px"
          class="card-main-slider"
        >
          <swiper-slide v-for="index of 20" :key="index">
            <div class="card__small-image">
              <img :src="SlideImg" alt="">
            </div>
          </swiper-slide>
        </swiper>
        <div class="card__info">
          <div class="card__info-row">
            <div class="card__info-column">
              <ul class="card__info-list">
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon1" alt="">
                    <span>Пробег:</span>
                  </div>
                  <div class="card__info-item-value">
                    180 000 км
                  </div>
                </li>
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon2" alt="">
                    <span>Объем двигателя:</span>
                  </div>
                  <div class="card__info-item-value">
                    2,7 л
                  </div>
                </li>
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon3" alt="">
                    <span>Привод:</span>
                  </div>
                  <div class="card__info-item-value">
                    Полный
                  </div>
                </li>
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon4" alt="">
                    <span>Лошадиные силы:</span>
                  </div>
                  <div class="card__info-item-value">
                    15
                  </div>
                </li>
              </ul>
            </div>
            <div class="card__info-column">
              <ul class="card__info-list">
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon5" alt="">
                    <span>Топливо:</span>
                  </div>
                  <div class="card__info-item-value">
                    Бензин
                  </div>
                </li>
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon6" alt="">
                    <span>Трансмиссия:</span>
                  </div>
                  <div class="card__info-item-value">
                    Автомат
                  </div>
                </li>
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon7" alt="">
                    <span>Расход:</span>
                  </div>
                  <div class="card__info-item-value">
                    15л/100км
                  </div>
                </li>
                <li class="card__info-item">
                  <div class="card__info-item-name">
                    <img :src="InfoIcon8" alt="">
                    <span>ДТП:</span>
                  </div>
                  <div class="card__info-item-value">
                    Без ДТП, не бито, не крашено
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card__right">
        <div class="card__head">
          <div class="card__head-top">
            <div class="card__head-title">
              Ford Edge 2016
            </div>
            <div class="card__head-links">
              <a href="">
                <LinkIcon />
              </a>
              <a href="">
                <FavoriteIcon />
              </a>
            </div>

          </div>
          <div class="card__head-bottom">
            <div class="card__head-code">
              Код товара: 40845
            </div>
            <div class="card__head-city">
              Львов
            </div>
          </div>
        </div>
        <div class="card__price">
          <div class="card__price-currency">
            <div class="card__price-row">
              <div class="card__price-currency-title">
                Цена
              </div>
              <v-radio-group class="card-options" inline v-model="selectedCurrency">
                <v-radio v-for="option of currencyOptions"
                         :key="option.value"
                         :value="option.value"

                >
                  <template #label>
                    <span class="radio-option" :class="{active:selectedCurrency===option.value}">{{ option.label
                      }}</span>
                  </template>
                </v-radio>
              </v-radio-group>
            </div>

          </div>
          <div class="card__price-main">
            62 490 {{ currentCurrencyLabel }}
          </div>
          <div class="card__credit-price">
            от 511$/мес
          </div>
          <div class="card__credit-description">
            *Ежемесячный платеж носит информационный характер и может меняться на момент получения детального расчета
            *Возможна оплата криптовалютой
          </div>
        </div>
        <div class="card__date-block">
          <div class="card__tags">
            <v-chip
              variant="outlined"
            >
              Все авто
            </v-chip>
            <v-chip
              variant="outlined"
            >
              Официальное авто
            </v-chip>
            <v-chip
              variant="outlined"
            >
              Авто с Европы
            </v-chip>
          </div>
          <div class="card__date-publication">
            Опубликовано 14.12.2023
          </div>
        </div>
        <div class="card__phone">
          <v-btn-primary class="w-100" type="evaluated" @click="toggleVisibleNumber">
            <template #prepend>
              <img :src="PhoneIcon" alt="">
            </template>
            Показать телефон
          </v-btn-primary>
          <div v-show="visibleNumber" class="">
            <a href="tel:38097705314" class="card__phone-number">+380977053138</a>
          </div>
        </div>
        <div class="card__additional-block">
          <div class="card__additional-block-title">
            Заказать услугу
          </div>
          <div class="card__additional-block-grid">
            <v-btn-secondary>
              <template #prepend>
                <img :src="TestIcon" alt="">
              </template>
              Тест драйв
            </v-btn-secondary>
            <v-btn-secondary>
              <template #prepend>
                <img :src="TradeIcon" alt="">
              </template>
              Trade in
            </v-btn-secondary>
            <v-btn-secondary>
              Онлайн просмотр
            </v-btn-secondary>
            <v-btn-secondary>
              Доставка
            </v-btn-secondary>
          </div>
        </div>
        <div class="card__additional-block">
          <div class="card__additional-block-title">
            Заказать проверку
          </div>
          <div class="card__additional-block-grid">
            <v-btn-secondary>
              СarVertical
            </v-btn-secondary>
            <v-btn-secondary>
              Autopark.ua
            </v-btn-secondary>
            <v-btn-primary class="w-100" type="evaluated">
              Полная проверка авто
            </v-btn-primary>
          </div>
        </div>
      </div>
    </div>
    <div class="card__block">
      <div class="card__block-title">
        Описание
      </div>
      <div class="card__description">
        <div class="card-info">
          <div class="card-info__left">
            <img :src="CountryIcon" alt="">
          </div>
          <div class="card-info__text">
            АН 1111 НА
          </div>
        </div>
        <div class="card__description-text" :class="{open:openMore}">
          Продажа Ford Edge 2016 года. Автомобиль куплен для личного использования. Почти в полной комплектации Sport
          Двигатель 2.7 Бензин 312 л.с. АКПП – полный привод AWD. Зимняя резина. Новая тормозная система. Android Auto.
          Подогрев всех сидений.
          Продажа Ford Edge 2016 года. Автомобиль куплен для личного использования. Почти в полной комплектации Sport
          Двигатель 2.7 Бензин 312 л.с. АКПП – полный привод AWD. Зимняя резина. Новая тормозная система. Android Auto.
          Подогрев всех сидений.
        </div>
        <div class="card__more-wrap">
          <div class="card__more-btn" :class="{open:openMore}" @click="toggleMore">
           <span v-if="!openMore">
            Показать больше
          </span>
            <span v-else>
            Показать меньше
          </span>
            <img :src="ArrowIcon" alt="">
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card {
}

.card__row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 40px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -50vw;
    width: 200vw;
    height: 1px;
    background: rgba(187, 187, 187, 0.40);
  }
}

.card__left {
  flex-grow: 1;
  min-width: 0;
}

.card__slider-main {
  margin-bottom: 12px;
  position: relative;


}

.card__slider-row {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;

  & > * {
    pointer-events: all
  }
}

.card-main-slider {

  .swiper-slide {
    width: auto;
  }
}

:deep(.swiper-pagination-bullets) {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 4;
  padding-bottom: 8px;
  width: 80px !important;
  transition: 300ms opacity;
  text-align: center;
  overflow: hidden;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background: var(--Primary-active);
  opacity: 0.5;
  transition: all 0.3s ease;
  margin-right: 4px;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet:hover) {
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

.card__slider-logo {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 0px 6.667px 6.667px 0px;
  background: var(--logo-black);
  padding-left: 20px;
  height: 40px;
}

.card__slider-logo-check {
  height: 100%;

  img {
    max-height: 100%;
    width: auto;
  }
}

.card__slider-logo-main {
  height: 100%;

  img {
    max-height: 100%
  }
}

.card__slider-actions {
  display: flex;
  gap: 8px;
}

.card__slider-count {
  border-radius: 8px;
  background: var(--text-primary-100, #161616);
  padding: 4px 8px;
  color: var(--Text-secondary);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  height: 40px;
  display: inline-flex;
  align-items: center;
}

.card__slider-youtube {
  padding: 4px 20px 4px 8px;
  border-radius: 8px 0px 0px 8px;
  background: var(--text-primary-100, #161616);
  display: inline-flex;
  align-items: center;
  height: 40px;

  &:hover {
    img {
      transform: translateX(6px);
    }
  }

  img {
    transition: all 0.3s ease;
  }
}

.card__big-image {
  position: relative;
  aspect-ratio: 780/588;
  width: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.card__small-image {
  height: 132px;
  width: 180px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card__info {
  padding-top: 20px;
}

.card__info-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card__info-column {
  padding: 0 30px;

  &:first-child {
    padding-left: 0;
    border-right: 1px solid rgba(187, 187, 187, 0.40);
  }

  &:last-child {
    padding-right: 0;
  }
}

.card__info-list {
  padding: 0;
  margin: 0;
}

.card__info-item {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 135%;

  &:last-child {
    margin-bottom: 0;
  }
}

.card__info-item-name {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: rgba(22, 22, 22, 0.70);

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    object-fit: contain;
  }
}

.card__info-item-value {
}

.card__right {
  width: 380px;
  flex-shrink: 0;
}

.card__head {
  border-bottom: 1px solid rgba(187, 187, 187, 0.40);
  padding-bottom: 13px;
}

.card__head-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.card__head-title {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.card__head-links {
  display: flex;
  gap: 4px;
  padding: 4px;

  a {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--Primary-active);
    }

    svg {
      stroke: currentColor;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
    }
  }
}

.card__head-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 18px;
}

.card__head-code {
  color: var(--text-primary-60);
}

.card__head-city {
  color: var(--logo-black);
}

.card__price {
  padding: 12px 0;
  border-bottom: 1px solid rgba(187, 187, 187, 0.40);
}

.card__price-row {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.card__price-currency-title {
  font-size: 18px;
  font-weight: 700;
}

.card__price-main {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}

.card__credit-price {
  margin-bottom: 12px;
  font-size: 18px;
}

.card__credit-description {

  font-size: 14px;
  color: var(--text-primary-60);
}

.card__date-block {
  padding: 12px 0;
  border-bottom: 1px solid rgba(187, 187, 187, 0.40);
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.card__phone {
  padding: 20px 0;
  border-bottom: 1px solid rgba(187, 187, 187, 0.40);
}


.card__phone-number {
  display: inline-block;
  margin-top: 10px;
  transition: all 0.3s;
  font-size: 18px;

  &:hover {
    color: var(--Primary-active);
  }
}

.card__additional-block {
  padding: 20px 0;
  border-bottom: 1px solid rgba(187, 187, 187, 0.40);

  &:last-child {
    border-bottom: 0px
  }
}

.card__additional-block-title {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
}

.card__additional-block-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;

  .w-100 {
    grid-column: 1/3;
  }
}


.card__date-publication {
  color: var(--text-primary-60);
}

.card__block {
  margin-bottom: 12px;
  margin-top: 12px;
  border-bottom: 1px solid rgba(187, 187, 187, 0.40);
  padding: 20px 0px;

  &:last-child {
    margin-bottom: 0;
  }
}

.card__block-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.card__description {
}

.card-info {
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #07499D;
  background: #FFF;
  height: 24px;
  overflow: hidden;
}

.card-info__left {
  background: #07499D;
  padding: 3px 4px;
  display: inline-flex;
  align-items: center;

  img {
    max-height: 100%
  }
}

.card-info__text {
  padding: 0 8px;
  font-size: 14px;
}

.card__description-text {
  font-size: 18px;
  font-weight: 400;
  line-height: 135%;
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &.open {
    display: block;
  }
}

.card__more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.card__more-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s;
  cursor: pointer;

  &.open {
    img {
      transform: rotate(180deg);
    }
  }

  img {
    transition: all 0.3s;
  }

  &:hover {
    color: var(--Primary-active);
  }
}

:deep(.v-selection-control__wrapper) {
  width: 0;
  height: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1;
}

:deep(.v-label) {
  opacity: 1;
  text-transform: uppercase;
}

:deep(.v-chip) {
  border-radius: 8px;
  border: 1px solid var(--Primary-hover);
  background: #FFF;
  padding: 8px;
  font-size: 16px;
  line-height: 24px;

}

:deep(.v-selection-control-group) {
  gap: 12px;
}

:deep(.v-input__details) {
  display: none;
}

.radio-option {
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--Primary-active);
  }


  &.active {
    color: var(--Primary-active);
    text-decoration: underline;
  }

}


</style>