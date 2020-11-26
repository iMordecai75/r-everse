                                    <?php foreach ($items as $item): ?>
                                    <tr id="fund_<?php echo str_replace('.','',$item['fida_code']); ?>" class="singolo_fondo">
                                        <td class="text-center number_ref">
                                            <?php echo $item['classifica_1_mese']; ?>°
                                        </td>
                                        <td class="nome_fondo">
                                            <?php echo $item['nome_fondo']; ?>
                                            <span class="categoria">
                                                <?php echo $item['isin']; ?>
                                            </span>
                                        </td>
                                        <td class="btn_add_portfolio text-center">
                                            <span class="to_add" id="btn_<?php echo str_replace('.','',$item['fida_code']); ?>"></span>
                                        </td>
                                        <td class="text-center rendimento <?php echo ($order == '1-mese')?'order':'';?>">
                                            <?php echo $item['mese']; ?>%
                                            <span class="posinchart">
                                                (<?php echo $item['classifica_1_mese']; ?>°)
                                            </span>
                                        </td>
                                        <td class="text-center rendimento <?php echo ($order == '1-anno')?'order':'';?>">
                                            <?php echo $item['anno']; ?>%
                                            <span class="posinchart">
                                                (<?php echo $item['classifica_1_anno']; ?>°)
                                            </span>
                                        </td>
                                        <td class="text-center rendimento <?php echo ($order == '3-anni')?'order':'';?>">
                                            <?php echo $item['3anni']; ?>%
                                            <span class="posinchart">
                                                (<?php echo $item['classifica_3_anni']; ?>°)
                                            </span>
                                        </td>
                                        <td class="text-center rendimento <?php echo ($order == '5-anni')?'order':'';?>">
                                            <?php echo $item['5anni']; ?>%
                                            <span class="posinchart">
                                                (<?php echo $item['classifica_5_anni']; ?>°)
                                            </span>
                                        </td>
                                        <td class="text-center scheda">
                                            <a title="Apri la scheda del fondo <?php echo $item['nome_fondo']; ?>" href="//www.moneycontroller.it/scheda-fondo/<?php echo $item['alias_nome_fondo_url']; ?>">
                                                Apri scheda <br> analisi e classifiche
                                            </a>
                                        </td>
                                    </tr>
                                    <?php endforeach; ?>
