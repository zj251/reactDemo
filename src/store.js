class Store {
    groupByRole(list) {
        const rs = {};
           list.forEach(item => {
               const role = item.role;
               if (!role) return;
   
               if (role in rs) {
                   rs[role].push({...item, role: item.role});
               } else {
           rs[role] = [{...item, role: item.role}];
               }
       });
        return rs;
    }
}

const store = new Store();
export default store;