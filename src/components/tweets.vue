<template>
  <div>
    <mdb-tbl hover>
      <mdb-tbl-head>
        <tr>
          <th>#</th>
          <th>Author</th>
          <th>Bet Partner</th>
          <th>Bettttttttttttttttttttttttttttttttttttttttttttttt</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th>3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
  </div>
</template>



<script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'TablePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
	},
	data(){
		return{
			betsCollection:[]
		};

	},
	mounted(){
		const db = this.$firebase.firestore();

		db
			.collection("bets")
			.get()
			.then(snap => {
				const betsCollection = [];
				snap.forEach(doc => {
					betsCollection.push({[doc.id]: doc.data()});
				});
				this.betsCollection = betsCollection;
			});
	},
  };
</script>
