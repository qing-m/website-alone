<template>
  <div>
    <div class="CreatorEntrance">
      <nuxt-link to="" tag="div" class="CreatorEntrance-link CreatorEntrance-Link--smallIcon">
        <div class="CreatorEntrance-hint ProfileSideCreator-creatorEntranceHint CreatorEntrancePage-hint--smallIcon">
          <svg class="Zi Zi--Creator CreatorEntrance-creatorIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z" fill-rule="evenodd" /></svg>
          <div class="CreatorEntrance-text">
            <div class="CreatorEntrance-indexPageTitle">
              <div class="css-vurnku">
                创作中心
                <span class="css-605fnf">
                  Lv 10
                </span>
              </div>
            </div>
          </div>
          <svg class="Zi Zi--ArrowRight CreatorEntrance-arrow CreatorEntrance-arrow--smallIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd" /></svg>
        </div>
        <div class="ProfileSideCreator-analytics">
          <div class="ProfileSideCreator-readCountItem">
            <div class="ProfileSideCreator-readCountTitle">
              昨日被阅读数
            </div>
            <div class="ProfileSideCreator-readCountNumber">
              1900000
            </div>
            <div class="css-u2c28s">
              <div class="ProfileSideCreator-countDeltaText css-1086365">
                较前日
              </div>
              <div class="css-1gqd0v0">
                --
              </div>
            </div>
          </div>
          <div class="ProfileSideCreator-readCountItem">
            <div class="ProfileSideCreator-readCountTitle">
              昨日获赞同数
            </div><div class="ProfileSideCreator-readCountNumber">
              999999
            </div><div class="css-u2c28s">
              <div class="ProfileSideCreator-countDeltaText css-1086365">
                较前日
              </div><div class="css-1gqd0v0">
                --
              </div>
            </div>
          </div>
        </div>
        <div class="css-19mtex">
          <nuxt-link to="" tag="div" class="css-1qzrmsu">
            瓦力保镖为你的创作提供持续保护
            <span>
              <svg width="17" height="17" viewBox="0 0 16 16" class="css-14gt3bc" fill="currentColor"><path d="M8 3l.737.339.428.187.377.158.326.127c.15.055.282.1.395.133.55.161 1.297.157 2.237-.014l-.002 3.784c0 3.07-2.52 4.76-4.498 5.286-1.977-.527-4.498-2.216-4.498-5.286L3.5 3.93c.94.17 1.686.175 2.237.014C6.187 3.812 6.941 3.497 8 3zm2.38 3.066L7.599 8.834 6.32 7.566a.4.4 0 0 0-.554.554l1.55 1.55a.5.5 0 0 0 .568 0l3.05-3.05a.4.4 0 0 0-.554-.554z" /></svg>
            </span>
          </nuxt-link>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CreatorEntrance {
  font-size: 14px;
  cursor: pointer;
  .CreatorEntrance-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    .CreatorEntrance-hint {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 56px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      .CreatorEntrance-creatorIcon {
        width: 18px;
        height: 18px;
        margin-left: 3px;
        color: #8590a6;
      }
      .CreatorEntrance-text {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-left: 6px;
        line-height: 16px;
        .CreatorEntrance-indexPageTitle {
          margin-left: 3px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          color: #444;
          .css-vurnku {
            box-sizing: border-box;
            margin: 0px;
            min-width: 0px;
            .css-605fnf {
              box-sizing: border-box;
              margin: 0px 0px 0px 8px;
              min-width: 0px;
              color: rgb(0, 132, 255);
            }
          }
        }
      }
    }
    .ProfileSideCreator-analytics {
      border-top: none;
      padding-top: 5px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 20px 0;
      width: 100%;
      border-top: 1px solid #f6f6f6;
      .ProfileSideCreator-readCountItem {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 0;
        flex: 1 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-right: 1px solid #ebebeb;
        &:last-child {
          border-right: none;
        }
        .ProfileSideCreator-readCountTitle {
          font-size: 12px;
          line-height: 22px;
          color: #8590a6;
        }
        .ProfileSideCreator-readCountNumber {
          font-size: 18px;
          line-height: 28px;
          font-weight: 600;
          color: #444;
        }
        .css-u2c28s {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          display: flex;
          font-size: 12px;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .ProfileSideCreator-countDeltaText {
            box-sizing: border-box;
            margin: 0px;
            min-width: 0px;
            color: rgb(99, 133, 166);
          }
          .css-1gqd0v0 {
            box-sizing: border-box;
            margin: 0px 0px 0px 4px;
            min-width: 0px;
            font-weight: 600;
          }
        }
      }
    }
    .css-19mtex {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      border-top: 1px solid rgb(246, 246, 246);
      border-right-color: rgb(246, 246, 246);
      border-bottom-color: rgb(246, 246, 246);
      border-left-color: rgb(246, 246, 246);
      width: 100%;
      padding: 10px 8px;
      .css-1qzrmsu {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 12px;
        color: rgb(133, 144, 166);
        span {
          display: inline-flex;
          align-items: center;
        }
      }
    }
  }
  .CreatorEntrance-Link--smallIcon {
    padding: 0 17px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}
</style>
