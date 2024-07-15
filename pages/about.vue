<template>
  <v-container class="pa-0 pa-sm-4">
    <div class="my-8 my-sm-16 text-blue-darken-1 text-h4 tw-text-center" v-if="!isMobile()">
      <strong>公司简介</strong>
    </div>

    <v-row class="pb-sm-8 ma-0">
      <v-col cols="12" sm="5" class="pa-0 tw-relative">
        <v-img src="/about/1.jpg"></v-img>
        <div
          class="py-4 tw-bottom-0 tw-absolute tw-w-full text-h5 tw-text-center tw-bg-[rgba(30,136,229,0.8)] tw-text-white"
          v-if="isMobile()">
          <strong>公司简介</strong>
        </div>
      </v-col>
      <v-col class="tw-leading-8" v-if="!isMobile()">
        <p class="text-grey-darken-1">
          <b>1. </b>我们公司成立于2015年2月11日，位于松山湖高新技术产业开发区，是一家专注于高品质时尚服饰制造的企业。公司注册资本为1000万元。
        </p>
        <p class="text-grey-darken-1"><b>2.</b> 公司主要从事时尚服饰的设计、生产与销售。我们的业务范围涵盖定制化服装、成衣生产、新材料应用及新产品开发等领域。</p>
        <p class="text-grey-darken-1">
          <b>3.</b>
          我们的产品涵盖男女时尚服饰，包括上衣、裤子、裙子、外套等，每件产品都经过精心设计与制作，力求在舒适与时尚之间找到平衡。我们还提供个性化定制服务，满足客户的多样化需求，确保每位消费者都能拥有独一无二的时尚单品。
        </p>
        <p class="text-grey-darken-1">
          <b>4.</b>
          公司厂房面积达6000平方米，现有员工70人。我们的核心团队来自行业内知名企业，具备丰富的服装设计、生产和管理经验，致力于打造高品质的时尚服饰。
        </p>
        <p class="text-grey-darken-1">
          <b>5.</b> 我们致力于通过不断的技术创新和优质的产品，为客户提供卓越的时尚服饰选择。我们的愿景是成为全球消费者首选的时尚品牌，推动服装行业的可持续发展。
        </p>
      </v-col>
      <v-col cols="12" class="tw-leading-6 tw-text-white tw-bg-[#1e88e5] px-10 pb-2" v-if="isMobile()">
        <ul>
          <li class="mb-1 tw-border-white tw-border-0 tw-border-b-2 tw-border-solid tw-list-disc">
            我们公司成立于2015年2月11日，位于松山湖高新技术产业开发区，是一家专注于高品质时尚服饰制造的企业。公司注册资本为1000万元。
          </li>
          <li class="mb-1 tw-border-white tw-border-0 tw-border-b-2 tw-border-solid tw-list-disc">
            公司主要从事时尚服饰的设计、生产与销售。我们的业务范围涵盖定制化服装、成衣生产、新材料应用及新产品开发等领域。
          </li>
          <li class="mb-1 tw-border-white tw-border-0 tw-border-b-2 tw-border-solid tw-list-disc">
            我们的产品涵盖男女时尚服饰，包括上衣、裤子、裙子、外套等，每件产品都经过精心设计与制作，力求在舒适与时尚之间找到平衡。我们还提供个性化定制服务，满足客户的多样化需求，确保每位消费者都能拥有独一无二的时尚单品。
          </li>
          <li class="mb-1 tw-border-white tw-border-0 tw-border-b-2 tw-border-solid tw-list-disc">
            公司厂房面积达6000平方米，现有员工70人。我们的核心团队来自行业内知名企业，具备丰富的服装设计、生产和管理经验，致力于打造高品质的时尚服饰。
          </li>
          <li class="mb-1 tw-border-white tw-border-0 tw-border-b-2 tw-border-solid tw-list-disc">
            我们致力于通过不断的技术创新和优质的产品，为客户提供卓越的时尚服饰选择。我们的愿景是成为全球消费者首选的时尚品牌，推动服装行业的可持续发展。
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>

  <v-sheet class="py-8 bg-grey-lighten-5 py-sm-16">
    <v-container>
      <div class="mb-8 text-blue-darken-1 tw-text-center text-h5 text-sm-h4 mb-sm-6">
        <strong>企业文化</strong>
      </div>
      <v-sheet border rounded v-if="!isMobile()">
        <v-row>
          <v-col>
            <div class="tw-my-[32px] tw-border-0 tw-border-solid tw-border-r-[1px] tw-border-e-blue-300">
              <div class="mb-4 text-center tw-font-medium tw-text-[32px] tw-flex tw-items-center tw-justify-center">
                诚信经营
              </div>
              <v-card-text>
                我们坚信诚信是企业发展的基石。无论是对客户、供应商还是员工，我们始终坚持诚信为本，恪守商业道德，建立长期稳定的合作关系。
              </v-card-text>
            </div>
          </v-col>
          <v-col>
            <div class="tw-my-[32px] tw-border-0 tw-border-solid tw-border-r-[1px] tw-border-e-blue-300">
              <div class="mb-4 text-center tw-font-medium tw-text-[36px] tw-flex tw-items-center tw-justify-center">
                品质至上
              </div>
              <v-card-text>质量是我们的生命线。我们严格把控每一道生产工序，确保每一件产品都达到高品质标准，为客户提供放心的优质产品。</v-card-text>
            </div>
          </v-col>
          <v-col>
            <div class="tw-my-[32px]">
              <div class="mb-4 text-center tw-font-medium tw-text-[36px] tw-flex tw-items-center tw-justify-center">
              </div>
              <v-card-text>客户是我们存在的理由。我们以客户需求为导向，提供专业、快捷的服务，确保客户满意度和忠诚度。</v-card-text>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <div v-if="isMobile()">
        <v-sheet border rounded="lg" class="my-4 tw-border-0 tw-border-solid tw-border-r-[1px] tw-border-e-blue-300">
          <v-row
            class="py-2 ma-0 pr-2 tw-bg-[linear-gradient(rgba(215,237,254,0.88),rgba(215,237,254,0.36))] tw-rounded-[8px]">
            <v-col>
              <div class="font-weight-bold tw-text-[32px] text-h5">诚信经营</div>
              <div class="font-weight-bold text-body-2">
                我们坚信诚信是企业发展的基石。无论是对客户、供应商还是员工，我们始终坚持诚信为本，恪守商业道德，建立长期稳定的合作关系。
              </div>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet border rounded="lg" class="my-4 tw-border-0 tw-border-solid tw-border-r-[1px] tw-border-e-blue-300">
          <v-row
            class="ma-0 py-2 pr-2 tw-bg-[linear-gradient(rgba(203,220,254,0.88),rgba(203,220,254,0.36))] tw-rounded-[8px]">
            <v-col cols=" tw-h-[120px]">
              <div class="font-weight-bold tw-text-[32px] text-h5">品质至上</div>
              <div class="font-weight-bold text-body-2">
                质量是我们的生命线。我们严格把控每一道生产工序，确保每一件产品都达到高品质标准，为客户提供放心的优质产品。
              </div>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet border rounded="lg" class="my-4 tw-border-0 tw-border-solid tw-border-r-[1px] tw-border-e-blue-300">
          <v-row
            class="py-2 ma-0 tw-bg-[linear-gradient(rgba(212,246,255,0.88),rgba(212,246,255,0.36))] tw-rounded-[8px]">
            <v-col cols=" tw-h-[120px]">
              <div class="font-weight-bold tw-text-[32px] text-h5">客户至上</div>
              <div class="font-weight-bold text-body-2">
                客户是我们存在的理由。我们以客户需求为导向，提供专业、快捷的服务，确保客户满意度和忠诚度。
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </v-container>
  </v-sheet>
  <v-sheet class="py-8 py-sm-16" :style="isMobile()
    ? 'background: url(/mobile/about-bg.png) no-repeat; background-size: 100% 100%'
    : 'background: url(/about_img/bg.png) no-repeat; background-size: 100% 100%'
    ">
    <v-container>
      <div class="mb-8 text-blue-darken-1 tw-text-center text-h5 text-sm-h4 mb-sm-6">
        <strong>公司发展</strong>
      </div>
      <v-timeline :direction="isMobile() ? 'vertical' : 'horizontal'">
        <v-timeline-item dot-color="indigo-lighten-1" size="16" fill-dot>
          <template v-slot:opposite>
            <strong class="text-blue-darken-1 tw-text-[22px]">2015</strong></template>
          <p class="tw-text-[14px]">
            <strong>公司创建</strong>
          </p>
        </v-timeline-item>
        <v-timeline-item dot-color="blue-darken-1" fill-dot size="32">
          <template v-slot:opposite>
            <strong class="text-blue-darken-1 tw-text-[22px]">2017</strong></template>
          <div>
            <p>
              <strong class="tw-text-[14px]">公司坐落松山 <br />
              </strong>
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="indigo-lighten-1" size="16" fill-dot>
          <template v-slot:opposite>
            <strong class="text-blue-darken-1 tw-text-[22px]">2018</strong>
          </template>
          <div>
            <p class="tw-text-[14px]"><strong>年销售量</strong></p>
            <p class="tw-text-[14px]"><strong>超过 1000+</strong></p>
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="blue-darken-1" fill-dot size="32">
          <template v-slot:opposite>
            <strong class="text-blue-darken-1 tw-text-[22px]" fill-dot>2020</strong>
          </template>

          <div class="tw-text-[14px]">
            <p><strong>年销售量</strong></p>
            <p><strong>超过 2000+</strong></p>
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="indigo-lighten-1" size="16" fill-dot>
          <template v-slot:opposite>
            <strong class="text-blue-darken-1 tw-text-[22px]">2021</strong>
          </template>
          <div class="tw-text-[14px]">
            <p><strong>分公司成立</strong></p>
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="blue-darken-1" fill-dot size="32">
          <template v-slot:opposite>
            <strong class="text-blue-darken-1 tw-text-[22px]">2022</strong></template>

          <div class="tw-text-[14px]">
            <p><strong>年销售量</strong></p>
            <p><strong>超过 10000+</strong></p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-sheet>
  <v-sheet class="bg-grey-lighten-6 pt-8 pt-sm-16 tw-pb-[128px]">
    <v-container>
      <div class="mb-8 text-blue-darken-1 tw-text-center text-h5 text-sm-h4 mb-sm-6">
        <strong>公司能力</strong>
      </div>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card variant="outlined" color="blue-darken-1" v-if="!isMobile()">
            <v-img src="/about/1.jpg"></v-img>
            <v-card-title class="text-grey-darken-4">先进的生产设备</v-card-title>
            <v-card-text class="text-grey-darken-4">我们的工厂配备了行业领先的生产设备，包括自动化缝纫机、数控切割机、高效熨烫设备等。
            </v-card-text>
          </v-card>
          <v-sheet v-if="isMobile()" rounded="lg">
            <v-row class="ma-0">
              <v-col cols="5" sm="12" class="pa-0 tw-rounded-l-lg">
                <img src="/about/1.jpg" class="tw-w-full tw-h-full tw-rounded-l-lg" />
              </v-col>
              <v-col cols="7" class="pa-0 tw-bg-[#1e88e5] tw-rounded-r-lg text-white">
                <v-card-title class="">先进的生产设备</v-card-title>
                <v-card-text class=" text-body-2">
                  我们的工厂配备了行业领先的生产设备，包括自动化缝纫机、数控切割机、高效熨烫设备等。
                </v-card-text>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card variant="outlined" color="blue-darken-1" v-if="!isMobile()">
            <v-img src="/about/2.jpg"></v-img>
            <v-card-title class="text-grey-darken-4">强大的生产能力</v-card-title>
            <v-card-text class="text-grey-darken-4 ">
              我们拥有6000平方米的现代化厂房，具备大规模生产能力。
            </v-card-text>
          </v-card>
          <v-sheet v-if="isMobile()" rounded="lg">
            <v-row class="ma-0">
              <v-col cols="7" class="pa-0 tw-bg-[#1e88e5] tw-rounded-l-lg text-white">
                <v-card-title>强大的生产能力</v-card-title>
                <v-card-text class=" text-body-2">
                  我们拥有6000平方米的现代化厂房，具备大规模生产能力。
                </v-card-text>
              </v-col>
              <v-col cols="5" sm="12" class="pa-0 tw-rounded-r-lg">
                <img src="/about/2.jpg" class="tw-w-full tw-h-full tw-rounded-r-lg" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card variant="outlined" color="blue-darken-1" v-if="!isMobile()">
            <v-img src="/about/3.jpg"></v-img>
            <v-card-title class="text-grey-darken-4">专业的生产团队</v-card-title>
            <v-card-text class="text-grey-darken-4">
              我们的生产团队由经验丰富的人员组成，能够确保每件产品都符合高标准的质量要求。
            </v-card-text>
          </v-card>
          <v-sheet v-if="isMobile()" rounded="lg">
            <v-row class="ma-0">
              <v-col cols="7" class="pa-0 tw-bg-[#1e88e5] tw-rounded-l-lg text-white">
                <v-card-title>专业的生产团队</v-card-title>
                <v-card-text class="px-4 text-body-2 ">
                  我们的生产团队由经验丰富的人员组成，能够确保每件产品都符合高标准的质量要求。
                </v-card-text>
              </v-col>
              <v-col cols="5" sm="12" class="pa-0 tw-rounded-r-lg">
                <img src="/about/3.jpg" class="tw-w-full tw-h-full tw-rounded-r-lg" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>


<style lang="scss" scoped>
b {
  display: inline;
  font-size: 20px;
  color: #1e88e5;
  font-style: italic;
}

p {
  cursor: default;
  font-weight: bold;
}
</style>
