<html>
    <head>
        <script type="text/javascript" src="GantChartController.js"></script>
        <link rel="stylesheet" href="GrantChartStyle.css">
    </head>
    <body onload="createGantChart()">

    <!-- Main Div -->
        <div class="main">       
        <div id="loader"></div>
            <!-- Filter Bar's Div -->
            <div class="filterBar" align = "center">                
               <div id="grid-filter-container"></div>
            </div>

               <!-- Empty Div with Height for spacing  -->
               <div style="height:10px; width:100%"></div>
            
            <!-- Clear Selection and Download Buttons Div  -->
            <div class = downloadReset align = "center">
                 <button class="buttons" onclick="onResetFilterClick()">Clear Selection</button>
                 <button class="buttons" onclick="fnExcelReport();"> Download Excel </button>
            </div>
               
               <!-- Empty Div with Height for spacing  -->
               <div style="height:10px; width:100%"></div>
            
            <!-- Table Body Div -->
            <div class ="main-body">
                <table id="tablestyle">
                    <thead>
                        <tr>
                            <th>Region</th>
                            <th >Market</th>
                            <th >Facility</th>
                            <th >Program</th>
                            <th >Project</th>
                            <th >Equipment ID</th>
                            <th >Need By Date</th>
                            <th >Activation Month</th>
                            <th >Migration Month</th>
                            <th >CR Num</th>
                            <th >EPA CD</th>
                            <th colspan="4">Oct 18</th>
                            <th colspan="4">Nov 18</th>
                            <th colspan="5">Dec 18</th>
                            <th colspan="4">Jan 19</th>
                            <th colspan="4">Feb 19</th>
                            <th colspan="5">Mar 19</th>
                            <th colspan="4">Apr 19</th>
                            <th colspan="4">May 19</th>
                            <th colspan="5">Jun 19</th>
                            <th colspan="4">Jul 19</th>
                            <th colspan="4">Aug 19</th>
                            <th colspan="5">Sep 19</th>
                            <th colspan="4">Oct 19</th>
                            <th colspan="4">Nov 19</th>
                            <th colspan="5">Dec 19</th>
                            <th colspan="4">Jan 20</th>
                            <th colspan="4">Feb 20</th>
                            <th colspan="5">Mar 20</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <td align="center">
                                <h6>40</h6>
                            </td>
                            <td align="center">
                                <h6>41</h6>
                            </td>
                            <td align="center">
                                <h6>42</h6>
                            </td>
                            <td align="center">
                                <h6>43</h6>
                            </td>
                            <td align="center">
                                <h6>44</h6>
                            </td>
                            <td align="center">
                                <h6>45</h6>
                            </td>
                            <td align="center">
                                <h6>46</h6>
                            </td>
                            <td align="center">
                                <h6>47</h6>
                            </td>
                            <td align="center">
                                <h6>48</h6>
                            </td>
                            <td align="center">
                                <h6>49</h6>
                            </td>
                            <td align="center">
                                <h6>50</h6>
                            </td>
                            <td align="center">
                                <h6>51</h6>
                            </td>
                            <td align="center">
                                <h6>52</h6>
                            </td>
                            <td align="center">
                                <h6>1</h6>
                            </td>
                            <td align="center">
                                <h6>2</h6>
                            </td>
                            <td align="center">
                                <h6>3</h6>
                            </td>
                            <td align="center">
                                <h6>4</h6>
                            </td>
                            <td align="center">
                                <h6>5</h6>
                            </td>
                            <td align="center">
                                <h6>6</h6>
                            </td>
                            <td align="center">
                                <h6>7</h6>
                            </td>
                            <td align="center">
                                <h6>8</h6>
                            </td>
                            <td align="center">
                                <h6>9</h6>
                            </td>
                            <td align="center">
                                <h6>10</h6>
                            </td>
                            <td align="center">
                                <h6>11</h6>
                            </td>
                            <td align="center">
                                <h6>12</h6>
                            </td>
                            <td align="center">
                                <h6>13</h6>
                            </td>
                            <td align="center">
                                <h6>14</h6>
                            </td>
                            <td align="center">
                                <h6>15</h6>
                            </td>
                            <td align="center">
                                <h6>16</h6>
                            </td>
                            <td align="center">
                                <h6>17</h6>
                            </td>
                            <td align="center">
                                <h6>18</h6>
                            </td>
                            <td align="center">
                                <h6>19</h6>
                            </td>
                            <td align="center">
                                <h6>20</h6>
                            </td>
                            <td align="center">
                                <h6>21</h6>
                            </td>
                            <td align="center">
                                <h6>22</h6>
                            </td>
                            <td align="center">
                                <h6>23</h6>
                            </td>
                            <td align="center">
                                <h6>24</h6>
                            </td>
                            <td align="center">
                                <h6>25</h6>
                            </td>
                            <td align="center">
                                <h6>26</h6>
                            </td>
                            <td align="center">
                                <h6>27</h6>
                            </td>
                            <td align="center">
                                <h6>28</h6>
                            </td>
                            <td align="center">
                                <h6>29</h6>
                            </td>
                            <td align="center">
                                <h6>30</h6>
                            </td>
                            <td align="center">
                                <h6>31</h6>
                            </td>
                            <td align="center">
                                <h6>32</h6>
                            </td>
                            <td align="center">
                                <h6>33</h6>
                            </td>
                            <td align="center">
                                <h6>34</h6>
                            </td>
                            <td align="center">
                                <h6>35</h6>
                            </td>
                            <td align="center">
                                <h6>36</h6>
                            </td>
                            <td align="center">
                                <h6>37</h6>
                            </td>
                            <td align="center">
                                <h6>38</h6>
                            </td>
                            <td align="center">
                                <h6>39</h6>
                            </td>
                            <td align="center">
                                <h6>40</h6>
                            </td>
                            <td align="center">
                                <h6>41</h6>
                            </td>
                            <td align="center">
                                <h6>42</h6>
                            </td>
                            <td align="center">
                                <h6>43</h6>
                            </td>
                            <td align="center">
                                <h6>44</h6>
                            </td>
                            <td align="center">
                                <h6>45</h6>
                            </td>
                            <td align="center">
                                <h6>46</h6>
                            </td>
                            <td align="center">
                                <h6>47</h6>
                            </td>
                            <td align="center">
                                <h6>48</h6>
                            </td>
                            <td align="center">
                                <h6>49</h6>
                            </td>
                            <td align="center">
                                <h6>50</h6>
                            </td>
                            <td align="center">
                                <h6>51</h6>
                            </td>
                            <td align="center">
                                <h6>52</h6>
                            </td>
                            <td align="center">
                                <h6>1</h6>
                            </td>
                            <td align="center">
                                <h6>2</h6>
                            </td>
                            <td align="center">
                                <h6>3</h6>
                            </td>
                            <td align="center">
                                <h6>4</h6>
                            </td>
                            <td align="center">
                                <h6>5</h6>
                            </td>
                            <td align="center">
                                <h6>6</h6>
                            </td>
                            <td align="center">
                                <h6>7</h6>
                            </td>
                            <td align="center">
                                <h6>8</h6>
                            </td>
                            <td align="center">
                                <h6>9</h6>
                            </td>
                            <td align="center">
                                <h6>10</h6>
                            </td>
                            <td align="center">
                                <h6>11</h6>
                            </td>
                            <td align="center">
                                <h6>12</h6>
                            </td>
                            <td align="center">
                                <h6>13</h6>
                            </td>
                        </tr>
                    </thead>
                    <tbody class="display-none" id="gridTableContainer"></tbody>
                </table>
            </div>
            <div class="footer-bar"><iframe id="txtArea1" style="display:none"></iframe></div>
        </div>
    </body>
</html>