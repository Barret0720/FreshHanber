<template>
<div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
  aria-labelledby="delProductModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title">
          <span>刪除最新消息</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否刪除
        <strong class="text-danger">{{ tempArticle.title }}</strong>
        <br />(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-danger" @click="delArticle">
          確認刪除
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['tempArticle', 'delArticle'],
  template: '#del-modal-template'
}
</script>
