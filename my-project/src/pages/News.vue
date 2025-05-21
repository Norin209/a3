<template>
    <div class="container py-5">
      <h2 class="mb-4">Latest News</h2>
  
      <!-- Search -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search news..."
        class="form-control mb-4"
      />
  
      <!-- News List -->
      <div v-for="item in paginatedNews" :key="item.id" class="news-card mb-4 p-3 border rounded">
        <h4>{{ item.title }}</h4>
        <p class="text-muted mb-1">{{ item.date }} | {{ item.category }}</p>
        <p>{{ item.content }}</p>
      </div>
  
      <!-- Pagination -->
      <nav v-if="totalPages > 1" class="mt-4">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="prevPage">Previous</button>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="goToPage(page)">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="nextPage">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import newsData from '../data/news.json';
  
  export default {
    name: 'NewsPage',
    data() {
      return {
        searchQuery: '',
        currentPage: 1,
        perPage: 2,
        allNews: newsData
      };
    },
    computed: {
      filteredNews() {
        const q = this.searchQuery.toLowerCase();
        return this.allNews.filter((item) =>
          item.title.toLowerCase().includes(q) ||
          item.content.toLowerCase().includes(q) ||
          item.date.includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      },
      paginatedNews() {
        const start = (this.currentPage - 1) * this.perPage;
        return this.filteredNews.slice(start, start + this.perPage);
      },
      totalPages() {
        return Math.ceil(this.filteredNews.length / this.perPage);
      }
    },
    methods: {
      goToPage(page) {
        this.currentPage = page;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .news-card h4 {
    font-weight: bold;
  }
  .pagination .page-item.active .page-link {
    background-color: #007bff;
    color: white;
  }
  </style>
  