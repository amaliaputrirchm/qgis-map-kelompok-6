var wms_layers = [];

var format_RBI25K_JALAN_LN_25K_0 = new ol.format.GeoJSON();
var features_RBI25K_JALAN_LN_25K_0 = format_RBI25K_JALAN_LN_25K_0.readFeatures(json_RBI25K_JALAN_LN_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_JALAN_LN_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_JALAN_LN_25K_0.addFeatures(features_RBI25K_JALAN_LN_25K_0);
var lyr_RBI25K_JALAN_LN_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_JALAN_LN_25K_0, 
                style: style_RBI25K_JALAN_LN_25K_0,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_JALAN_LN_25K_0.png" /> RBI25K_JALAN_LN_25K'
            });
var format_RBI25K_SUNGAI_AR_25K_1 = new ol.format.GeoJSON();
var features_RBI25K_SUNGAI_AR_25K_1 = format_RBI25K_SUNGAI_AR_25K_1.readFeatures(json_RBI25K_SUNGAI_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_SUNGAI_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_SUNGAI_AR_25K_1.addFeatures(features_RBI25K_SUNGAI_AR_25K_1);
var lyr_RBI25K_SUNGAI_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_SUNGAI_AR_25K_1, 
                style: style_RBI25K_SUNGAI_AR_25K_1,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_SUNGAI_AR_25K_1.png" /> RBI25K_SUNGAI_AR_25K'
            });
var format_RBI25K_KANTORPOS_PT_25K_2 = new ol.format.GeoJSON();
var features_RBI25K_KANTORPOS_PT_25K_2 = format_RBI25K_KANTORPOS_PT_25K_2.readFeatures(json_RBI25K_KANTORPOS_PT_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_KANTORPOS_PT_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_KANTORPOS_PT_25K_2.addFeatures(features_RBI25K_KANTORPOS_PT_25K_2);
var lyr_RBI25K_KANTORPOS_PT_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_KANTORPOS_PT_25K_2, 
                style: style_RBI25K_KANTORPOS_PT_25K_2,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_KANTORPOS_PT_25K_2.png" /> RBI25K_KANTORPOS_PT_25K'
            });
var format_RBI25K_DEPOMINYAK_PT_25K_3 = new ol.format.GeoJSON();
var features_RBI25K_DEPOMINYAK_PT_25K_3 = format_RBI25K_DEPOMINYAK_PT_25K_3.readFeatures(json_RBI25K_DEPOMINYAK_PT_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_DEPOMINYAK_PT_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_DEPOMINYAK_PT_25K_3.addFeatures(features_RBI25K_DEPOMINYAK_PT_25K_3);
var lyr_RBI25K_DEPOMINYAK_PT_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_DEPOMINYAK_PT_25K_3, 
                style: style_RBI25K_DEPOMINYAK_PT_25K_3,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_DEPOMINYAK_PT_25K_3.png" /> RBI25K_DEPOMINYAK_PT_25K'
            });
var format_RBI25K_BANGUNAN_AR_4 = new ol.format.GeoJSON();
var features_RBI25K_BANGUNAN_AR_4 = format_RBI25K_BANGUNAN_AR_4.readFeatures(json_RBI25K_BANGUNAN_AR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_BANGUNAN_AR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_BANGUNAN_AR_4.addFeatures(features_RBI25K_BANGUNAN_AR_4);
var lyr_RBI25K_BANGUNAN_AR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_BANGUNAN_AR_4, 
                style: style_RBI25K_BANGUNAN_AR_4,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_BANGUNAN_AR_4.png" /> RBI25K_BANGUNAN_AR'
            });

lyr_RBI25K_JALAN_LN_25K_0.setVisible(true);lyr_RBI25K_SUNGAI_AR_25K_1.setVisible(true);lyr_RBI25K_KANTORPOS_PT_25K_2.setVisible(true);lyr_RBI25K_DEPOMINYAK_PT_25K_3.setVisible(true);lyr_RBI25K_BANGUNAN_AR_4.setVisible(true);
var layersList = [lyr_RBI25K_JALAN_LN_25K_0,lyr_RBI25K_SUNGAI_AR_25K_1,lyr_RBI25K_KANTORPOS_PT_25K_2,lyr_RBI25K_DEPOMINYAK_PT_25K_3,lyr_RBI25K_BANGUNAN_AR_4];
lyr_RBI25K_JALAN_LN_25K_0.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_SUNGAI_AR_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_KANTORPOS_PT_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RBI25K_DEPOMINYAK_PT_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RBI25K_BANGUNAN_AR_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_JALAN_LN_25K_0.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_LENG': '', 'SHAPE_LEN': '', });
lyr_RBI25K_SUNGAI_AR_25K_1.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_RBI25K_KANTORPOS_PT_25K_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_RBI25K_DEPOMINYAK_PT_25K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_RBI25K_BANGUNAN_AR_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_RBI25K_JALAN_LN_25K_0.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_SUNGAI_AR_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_KANTORPOS_PT_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RBI25K_DEPOMINYAK_PT_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RBI25K_BANGUNAN_AR_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_BANGUNAN_AR_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});