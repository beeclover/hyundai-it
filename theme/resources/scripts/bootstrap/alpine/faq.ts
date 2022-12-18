import _ from 'lodash'

// 왜 이렇게 faq의 데이터 형식으로 추가했는지?
// faq 아이템 리스트는 하나의 그리드 아래에 있기 때문에
// 리스트를 감싸는 돔이 없다.
// 해당 돔이있다면 해당 돔에 데이터를 만들어서 추가했으면 됐지만
// 그리드 돔 아래에 모든 형제요소로 추가되었기 때문에 이 처럼 데이터로 관리하게 되었다.
export default () => ({
  active: null,
  items: [],
  add(id) {
    this.items.push({
      id,
      expanded: false
    })
  },
  getIndex(id) {
    return _.findIndex(this.items, (i: { id: string }) => i.id === id)
  },
  isExpanded(id) {
    return this.items[this.getIndex(id)].expanded
  },
  toggle(id) {
    // 선택했을때 해당 리스트를 노출시킨다.
    const index = this.getIndex(id);
    const item = this.items[index];
    item.expanded = !item.expanded;
    this.close(id);
  },
  // 한개의 리스트만 노출시키게 한다. 아코디언
  // 선택한 리스트를 제외한 모든 리스트를 접는다.
  close(id: string) {
    _.forEach(this.items, (item, index) => {
      if (item.id !== id)
        this.items[index].expanded = false
    })
  }
})
