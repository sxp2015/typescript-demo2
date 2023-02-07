<template>
  <div>

    
          <div>
            <h1>Ref-X座标：{{ RefX }} |  Ref-Y座标：{{ RefY }}</h1>
          </div>
  

        <div >
          <h1>Reacitive-X 座标：{{ ReacitiveX }}   Reacitive-Y 座标：{{ ReacitiveY }}</h1>
        </div>



  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";


import {
  useMousePositionByReactive,
  useMousePositionByRef,
} from "../hooks/testHooks";


const { x: ReacitiveX, y: ReacitiveY } = useMousePositionByReactive();
const { x: RefX, y: RefY } = useMousePositionByRef();


</script>

<style scoped></style>
